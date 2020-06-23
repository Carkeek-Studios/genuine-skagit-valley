import { Component } from "@wordpress/element";
import {
    RichText,
    MediaPlaceholder,
    BlockControls,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
    URLInput
} from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import {
    Spinner,
    withNotices,
    Toolbar,
    IconButton,
    PanelBody,
    TextareaControl,
    SelectControl,
    Dashicon,
    Tooltip,
    TextControl
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import {
    SortableContainer,
    SortableElement,
    arrayMove
} from "react-sortable-hoc";

class TeamMemberEdit extends Component {
    state = {
        selectedLink: null
    };

    componentDidMount() {
        const { attributes, setAttributes } = this.props;
        const { url, id } = attributes;
        if (url && isBlobURL(url) && !id) {
            setAttributes({
                url: "",
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
    onChangeTitle = title => {
        this.props.setAttributes({ title });
    };
    onChangeInfo = info => {
        this.props.setAttributes({ info });
    };
    onChangeDetails = details => {
        this.props.setAttributes({ details });
    };
    onChangeEmail = email => {
        this.props.setAttributes({ email });
    };
    onChangeEmail = emailLabel => {
        this.props.setAttributes({ emailLabel });
    };
    onSelectImage = ({ id, url, alt }) => {
        this.props.setAttributes({
            id,
            url,
            alt
        });
    };
    onSelectURL = url => {
        this.props.setAttributes({
            url,
            id: null,
            alt: ""
        });
    };
    onUploadError = message => {
        const { noticeOperations } = this.props;
        noticeOperations.createErrorNotice(message);
    };
    removeImage = () => {
        this.props.setAttributes({
            id: null,
            url: "",
            alt: ""
        });
    };
    updateAlt = alt => {
        this.props.setAttributes({
            alt
        });
    };
    onImageSizeChange = url => {
        this.props.setAttributes({
            url
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
        const { className, attributes, noticeUI, isSelected } = this.props;
        const { title, info, url, alt, id, details, email, emailLabel } = attributes;


        return (
            <>
                <InspectorControls>
                    <PanelBody title={__("Image Settings", "carkeek-blocks")}>
                        {url && !isBlobURL(url) && (
                            <TextareaControl
                                label={__(
                                    "Alt Text (Alternative Text)",
                                    "carkeek-blocks"
                                )}
                                value={alt}
                                onChange={this.updateAlt}
                                help={__(
                                    "Alternative text describes your image to people can't see it. Add a short description with its key details."
                                )}
                            />
                        )}
                        {id && (
                            <SelectControl
                                label={__("Image Size", "carkeek-blocks")}
                                options={this.getImageSizes()}
                                onChange={this.onImageSizeChange}
                                value={url}
                            />
                        )}
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    {url && (
                        <Toolbar>
                            {id && (
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={this.onSelectImage}
                                        allowedTypes={["image"]}
                                        value={id}
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
                </BlockControls>
                <div className={className}>
                    {url ? (
                        <>
                            <img src={url} alt={alt} />
                            {isBlobURL(url) && <Spinner />}
                        </>
                    ) : (
                        <MediaPlaceholder
                            icon="format-image"
                            onSelect={this.onSelectImage}

                            onError={this.onUploadError}
                            //accept="image/*"
                            allowedTypes={["image"]}
                            notices={noticeUI}
                        />
                    )}
                    <RichText
                        className={"wp-block-carkeek-blocks-team-member__title"}
                        tagName="h4"
                        onChange={this.onChangeTitle}
                        value={title}
                        placeholder={__("Member Name", "carkeek-blocks")}
                        formatingControls={[]}
                    />
                    <RichText
                        className={"wp-block-carkeek-blocks-team-member__info"}
                        tagName="p"
                        onChange={this.onChangeInfo}
                        value={info}
                        placeholder={__("Member Title", "carkeek-blocks")}
                        formatingControls={[]}
                    />
                    {isSelected &&
                    <>
                    <RichText
                        className={"wp-block-carkeek-blocks-team-member__details"}
                        tagName="p"
                        onChange={this.onChangeDetails}
                        value={details}
                        placeholder={__("Member Details", "carkeek-blocks")}
                        formatingControls={[]}
                    />
                    <TextControl
                        value={email}
                        onChange={this.onChangeEmail}
                        label={__("Email", "carkeek-blocks")}
                    />
                    <TextControl
                        value={emailLabel}
                        onChange={this.onChangeEmailLabel}
                        label={__("Email Label", "carkeek-blocks")}
                    />
                    </>
                    }
                </div>
            </>
        );
    }
}

export default withSelect((select, props) => {
    const id = props.attributes.id;
    return {
        image: id ? select("core").getMedia(id) : null,
        imageSizes: select("core/editor").getEditorSettings().imageSizes
    };
})(withNotices(TeamMemberEdit));
