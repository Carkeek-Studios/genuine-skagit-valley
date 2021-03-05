import "./style.editor.scss";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { RichText } from "@wordpress/block-editor";


const attributes = {
    name: {
        type: "string",
        source: "html",
        selector: ".ck-team-member__name"
    },
    title: {
        type: "string",
        source: "html",
        selector: ".ck-team-member__title"
    },
    details: {
        type: "string",
        source: "html",
        selector: ".ck-team-member__details"
    },
    id: {
        type: "number"
    },
    alt: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "alt",
        default: ""
    },
    url: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src"
    },
    blockId: {
        type: "string",
        source: "attribute",
        selector: '.ck-team-member',
        attribute: 'data-id'
    },
    email: {
        type: "string",
    },
    emailLabel: {
        type: "string",
        default: "Send an email"
    }
};

registerBlockType("carkeek-blocks/team-member", {
    title: __("Team Member", "carkeek-blocks"),

    description: __(" Block showing a Team Member. ", "carkeek-blocks"),

    icon: "admin-users",

    parent: ["carkeek-blocks/team-members"],

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [
        __("team", "carkeek-blocks"),
        __("member", "carkeek-blocks"),
        __("person", "carkeek-blocks"),
        __("staff", "carkeek-blocks")
    ],

    attributes,

    save: ({ attributes }) => {
        const { title, name, url, alt, id, details, email, emailLabel, blockId } = attributes;
        return (
            <div>
                <div className="ck-team-member" data-id={blockId}>
                    {url && (
                        <div className="ck-team-member__image" data-toggle="modal" data-target={`#dialog-${blockId}`}>
                            <img
                                src={url}
                                alt={alt}
                                className={id ? `skip-lazy wp-image-${id}` : 'skip-lazy'}
                            />
                        </div>
                    )}

                    <RichText.Content
                        className={"ck-team-member__name"}
                        tagName="a"
                        value={name}
                        id={`title-${blockId}`}
                        data-toggle="modal"
                        data-target={`#dialog-${blockId}`}
                    />

                    {title && (
                        <RichText.Content
                            className={"ck-team-member__title"}
                            tagName="p"
                            value={title}
                        />
                    )}
                 </div>
                 <div className="ck-team-member__additional modal fade" id={`dialog-${blockId}`} tabIndex="-1" role="dialog" aria-labelledby={`title-${blockId}`} aria-hidden="true">
                     <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            {url && (
                                <div className="ck-team-member__image">
                                    <img
                                        src={url}
                                        alt={alt}
                                        className={id ? `skip-lazy wp-image-${id}` : 'skip-lazy'}
                                    />
                                </div>
                            )}

                            <RichText.Content
                                className={"ck-team-member__name"}
                                tagName="div"
                                value={name}
                            />

                            {title && (
                                <RichText.Content
                                    className={"ck-team-member__title"}
                                    tagName="p"
                                    value={title}
                                />
                            )}
                                {details && (
                                    <RichText.Content
                                        className={"ck-team-member__details"}
                                        tagName="p"
                                        value={details}
                                    />
                                )}
                                {email &&(
                                    <a className={"button is-style-cta"} href={`mailto:${email}`}>{emailLabel}</a>
                                )}
                             </div>
                            <div className="modal-footer">
                                <a data-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    edit
});
