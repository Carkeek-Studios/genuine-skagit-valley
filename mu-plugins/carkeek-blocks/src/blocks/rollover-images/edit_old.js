import { Component } from "@wordpress/element";
import {
    MediaPlaceholder,
    BlockControls,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import {
    Spinner,
    withNotices,
    Toolbar,
    IconButton,
    PanelBody,
    SelectControl,
    TextareaControl
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { compose } from "@wordpress/compose";

class ImageRollover extends Component {
    state = {
        selectedLink: null
    };

    componentDidMount() {
        const { attributes, setAttributes } = this.props;
        const { imgUrl, imgId } = attributes;
        if (imgUrl && isBlobURL(imgUrl) && !imgId) {
            setAttributes({
                imgUrl: "",
                alt: ""
            });
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isSelected && !this.props.isSelected) {
            this.setState({
                selectedLink: null
            });
        }
    }


    onSelectImage = ({ id, url }) => {
        this.props.setAttributes({
            imgId: id,
            imgUrl: url
        });
    };
    onSelectHoverImage = ({ id, url }) => {
        this.props.setAttributes({
            imgHoverId: id,
            imgHoverUrl: url
        });
    };
    onUploadError = message => {
        const { noticeOperations } = this.props;
        noticeOperations.createErrorNotice(message);
    };
    removeImage = () => {
        this.props.setAttributes({
            imgId: null,
            imgUrl: ""
        });
    };
    removeHoverImage = () => {
        this.props.setAttributes({
            imgHoverId: null,
            imgHoverUrl: ""
        });
    };
    onImageSizeChange = imgUrl => {
        this.props.setAttributes({
            imgUrl
        });
    };
    getImageSizes() {
        const { image, imageSizes } = this.props;
        if (!image) return [];
        let options = [];
        const sizes = image.media_details.sizes;
        for (const key in sizes) {
            const size = sizes[key];
            const imageSize = imageSizes.find(size => size.slug === key);
            if (imageSize) {
                options.push({
                    label: imageSize.name,
                    value: size.source_url
                });
            }
        }
        return options;
    }

    render() {
        //console.log(this.props);
        const {
            className,
            attributes,
            noticeUI,
            isSelected,
            setAttributes
        } = this.props;
        const {
            imgUrl,
            imgHoverUrl,
            imgId,
            imgHoverId,
            rolloverText
        } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__("Image Settings", "carkeek-blocks")}>
                        {imgId && (
                            <SelectControl
                                label={__("Image Size", "carkeek-blocks")}
                                options={this.getImageSizes()}
                                onChange={this.onImageSizeChange}
                                value={imgUrl}
                            />
                        )}
                        {imgHoverId && (
                            <SelectControl
                                label={__("Image Size", "carkeek-blocks")}
                                options={this.getImageSizes()}
                                onChange={this.onImageSizeChange}
                                value={imgHoverUrl}
                            />
                        )}
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <>
                        {imgUrl && (
                            <Toolbar>
                                {imgId && (
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={this.onSelectImage}
                                            allowedTypes={["image"]}
                                            value={imgId}
                                            render={({ open }) => {
                                                return (
                                                    <IconButton
                                                        className="components-icon-button components-toolbar__control"
                                                        label={__(
                                                            "Edit Image",
                                                            "carkeek-blocks"
                                                        )}
                                                        onClick={open}
                                                        icon="edit"
                                                    />
                                                );
                                            }}
                                        />
                                    </MediaUploadCheck>
                                )}
                                <IconButton
                                    className="components-icon-button components-toolbar__control"
                                    label={__("Remove Image", "carkeek-blocks")}
                                    onClick={this.removeImage}
                                    icon="trash"
                                />
                            </Toolbar>
                        )}
                        {imgHoverUrl && (
                            <Toolbar>
                                {imgHoverId && (
                                    <MediaUploadCheck>
                                        <MediaUpload
                                            onSelect={this.onSelectHoverImage}
                                            allowedTypes={["image"]}
                                            value={imgHoverId}
                                            render={({ open }) => {
                                                return (
                                                    <IconButton
                                                        className="components-icon-button components-toolbar__control"
                                                        label={__(
                                                            "Edit Image",
                                                            "carkeek-blocks"
                                                        )}
                                                        onClick={open}
                                                        icon="edit"
                                                    />
                                                );
                                            }}
                                        />
                                    </MediaUploadCheck>
                                )}
                                <IconButton
                                    className="components-icon-button components-toolbar__control"
                                    label={__("Remove Image", "carkeek-blocks")}
                                    onClick={this.removeHoverImage}
                                    icon="trash"
                                />
                            </Toolbar>
                        )}
                        </>
                </BlockControls>
                <div className={className}>
                    {imgUrl ? (
                        <>
                            <div className={ "wp-block-carkeek-blocks-link-tile__img" } >
                                {isBlobURL(imgUrl) ? (
                                    <Spinner />
                                ) : (
                                    <img src={imgUrl} />
                                )}
                            </div>
                            {isSelected && (

                                    <TextareaControl
                                        onChange={ (rolloverText) => setAttributes( { rolloverText })}
                                        value={rolloverText}
                                        label={__(
                                            "Hover State Text",
                                            "carkeek-blocks"
                                        )}
                                    />

                            )}
                        </>
                    ) : (
                        <MediaPlaceholder
                            icon="format-image"
                            onSelect={this.onSelectImage}
                            onError={this.onUploadError}
                            //accept="image/*"
                            allowedTypes={["image"]}
                            notices={noticeUI}
                            labels={{
                                title: "Static Image",
                                instructions:
                                    "Upload an image file or pick one from your media library."
                            }}
                        />
                    )}
                    {isSelected && (
                        <>
                            {imgUrl ? (
                                <>
                                    <div className={ "wp-block-carkeek-blocks-link-tile__img" } >
                                    {isBlobURL(imgHoverUrl) ? (
                                    <Spinner />
                                ) : (
                                    <img src={imgHoverUrl} />
                                )}
                                    </div>

                                </>
                            ) : (
                                <MediaPlaceholder
                                    icon="format-image"
                                    onSelect={this.onSelectHoverImage}
                                    onError={this.onUploadError}
                                    //accept="image/*"
                                    allowedTypes={["image"]}
                                    notices={noticeUI}
                                    labels={{
                                        title: "Rollover Image",
                                        instructions:
                                            "Upload an image file or pick one from your media library."
                                    }}
                                />
                            )}

                            <TextareaControl
                                onChange={ (rolloverText) => setAttributes( { rolloverText })}
                                value={rolloverText}
                                label={__(
                                    "Hover State Text",
                                    "carkeek-blocks"
                                )}
                            />
                        </>
                    )}
                </div>
            </>
        );
    }
}

export default compose([
    withSelect((select, props) => {
        const imgId = props.attributes.imgId;
        return {
            image: imgId ? select("core").getMedia(imgId) : null,
            imageSizes: select("core/editor").getEditorSettings().imageSizes
        };
    }),
    withNotices
])(ImageRollover);
