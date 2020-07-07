import classnames from "classnames";
import { get, invoke } from "lodash";

import { Component, RawHTML } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    Text,
    Spinner,
    Placeholder,
    SelectControl,
    CheckboxControl
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

class MappedPostsArchiveEdit extends Component {
    onChangePostType = postTypeSelected => {
        this.props.setAttributes({ postTypeSelected });
    };

    render() {
        const {
            posts,
            postTypes,
            attributes,
            setAttributes
        } = this.props;
        const {
            popupTitle,
            popupExcerpt,
            popupImage,
            excerptLength,
            postsToShow,
            postTypeSelected
        } = attributes;
        const postTypeSelect = (
            <SelectControl
                label={__("Post Type", "carkeek-blocks")}
                onChange={this.onChangePostType}
                options={
                    postTypes &&
                    postTypes.map(type => ({
                        value: type.slug,
                        label: type.name
                    }))
                }
                value={postTypeSelected}
            />
        );
        const inspectorControls = (
            <InspectorControls>
                <PanelBody title={__("Posts Settings", "carkeek-blocks")}>
                    {postTypeSelect}
                    <CheckboxControl
                        heading={__("Include in Popup:")}
                        label={__("Listing Title")}
                        checked={popupTitle}
                        onChange={value =>
                            setAttributes({
                                popupTitle: value
                            })
                        }
                    />
                    <CheckboxControl
                        label={__("Featured Image")}
                        checked={popupImage}
                        onChange={value =>
                            setAttributes({
                                popupImage: value
                            })
                        }
                    />
                    <CheckboxControl
                        label={__("Excerpt")}
                        checked={popupExcerpt}
                        onChange={value =>
                            setAttributes({
                                popupExcerpt: value
                            })
                        }
                    />
                    {popupExcerpt &&
                        <RangeControl
                            label={__("Max number of words in excerpt")}
                            value={excerptLength}
                            onChange={value =>
                                setAttributes({ excerptLength: value })
                            }
                            min={10}
                            max={30}
                        />
                    }
                </PanelBody>
            </InspectorControls>
        );

        const hasPosts = Array.isArray(posts) && posts.length;

        if (!hasPosts) {
            const noPostMessage =
                typeof postTypeSelected !== "undefined"
                    ? __("No Posts Found")
                    : __("Select a Post Type from the Block Settings");
            return (
                <>
                    {inspectorControls}

                    <Placeholder label={__("Latest Posts")}>
                        {!Array.isArray(posts) ? <Spinner /> : noPostMessage}
                    </Placeholder>
                </>
            );
        }

        //removing posts should be instant
        const displayPosts =
            posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;


        return (
            <>
                {inspectorControls}
                <div>
                    <ul>
                        {displayPosts.map(post => {
                            const titleTrimmed = invoke(post, [
                                "title",
                                "rendered",
                                "trim"
                            ]);
                            let excerpt = post.excerpt.rendered;

                            const excerptElement = document.createElement(
                                "div"
                            );
                            excerptElement.innerHTML = excerpt;

                            excerpt =
                                excerptElement.textContent ||
                                excerptElement.innerText ||
                                "";
                            const imageSourceUrl = post.featuredImageSourceUrl;

                            const imageClasses = classnames({
                                "wp-block-ck-custom_posttype__featured-image": true
                            });

                            const postExcerpt = (
                                <>
                                    {excerpt
                                        .trim()
                                        .split(" ", excerptLength)
                                        .join(" ")}
                                    {/* translators: excerpt truncation character, default …  */}
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {__("Read more")}
                                    </a>
                                </>
                            );

                            return (
                                <li key={post.id}>
                                    {popupImage && (
                                        <div className={imageClasses}>
                                            {imageSourceUrl && (
                                                <img
                                                    src={imageSourceUrl}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                    )}
                                    {popupTitle && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={post.link}
                                        >
                                            {titleTrimmed ? (
                                                <RawHTML>
                                                    {titleTrimmed}
                                                </RawHTML>
                                            ) : (
                                                __("(no title)")
                                            )}
                                        </a>
                                    )}
                                    {popupExcerpt &&

                                            <div className="wp-block-ck-custom_posttype__post-excerpt">
                                                {postExcerpt}
                                            </div>
                                        }

                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default withSelect((select, props) => {
    const { attributes } = props;
    const { postTypeSelected } = attributes;
    const { getEntityRecords, getMedia, getPostTypes } = select("core");
    let query = { per_page: 5 };
    const latestPosts = getEntityRecords("postType", postTypeSelected, query);

    return {
        postTypes: getPostTypes(),
        posts: !Array.isArray(latestPosts)
            ? latestPosts
            : latestPosts.map(post => {
                  if (post.featured_media) {
                      const image = getMedia(post.featured_media);
                      let url = get(
                          image,
                          ["media_details", "sizes", "large", "sourc_url"],
                          null
                      );
                      if (!url) {
                          url = get(image, "source_url", null);
                      }
                      return { ...post, featuredImageSourceUrl: url };
                  }
                  return post;
              })
    };
})(MappedPostsArchiveEdit);
