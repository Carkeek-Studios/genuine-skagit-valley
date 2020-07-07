import "./style.editor.scss";
import "./parent";
import edit from "./edit"
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";


registerBlockType("mapped-posts/link", {
    title: __("Link", "mapped-post"),
    description: __(
        "Link",
        "mapped-post"
    ),
    icon: "admin-links",
    category: "mapped-posts",
    parent: ["mapped-posts/mappedpost-links"],
    attributes: {
        url: {
            type: 'string',
            src: 'attribute',
            selector: 'a',
            attribute: 'href'
        },
        label: {
            type: 'string',
            src: 'html',
            selector: 'a',
        }
    },
    edit,
    save({attributes}) {
        const { url, label } = attributes;
        return (
            <div>
            <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
            </div>
        );
    }
});
