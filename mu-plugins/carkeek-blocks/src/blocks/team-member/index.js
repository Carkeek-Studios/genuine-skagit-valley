import "./style.editor.scss";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { RichText } from "@wordpress/editor";
import { Dashicon } from "@wordpress/components";

const attributes = {
    title: {
        type: "string",
        source: "html",
        selector: "h4"
    },
    info: {
        type: "string",
        source: "html",
        selector: ".wp-block-carkeek-blocks-team-member__info"
    },
    details: {
        type: "string",
        source: "html",
        selector: ".wp-block-carkeek-blocks-team-member__details"
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
        const { title, info, url, alt, id, details } = attributes;
        return (
            <div>
                {url && (
                    <img
                        src={url}
                        alt={alt}
                        className={id ? `wp-image-${id}` : null}
                    />
                )}
                {title && (
                    <RichText.Content
                        className={"wp-block-carkeek-blocks-team-member__title"}
                        tagName="h4"
                        value={title}
                    />
                )}
                {info && (
                    <RichText.Content
                        className={"wp-block-carkeek-blocks-team-member__info"}
                        tagName="p"
                        value={info}
                    />
                )}

                {details && (
                    <RichText.Content
                        className={"wp-block-carkeek-blocks-team-member__details"}
                        tagName="p"
                        value={details}
                    />
                )}

            </div>
        );
    },

    edit
});
