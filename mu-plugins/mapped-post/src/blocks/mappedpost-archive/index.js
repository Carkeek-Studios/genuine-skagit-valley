import "./styles.editor.scss";
import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const attributes = {
    numberOfPosts: {
        type: "number",
        default: 3
    },
    postTypeSelected: {
        type: "string"
    },
    latFieldSelected: {
        type: "string"
    },
    lngFieldSelected: {
        type: "string"
    },
    popupImage: {
        type: "boolean",
        default: true
    },
    popupTitle: {
        type: "boolean",
        default: true
    },
    popupExcerpt: {
        type: "boolean",
        default: true
    },

    excerptLength: {
        type: "number",
        default: 25
    },
    mapAddFilter: {
        type: "boolean",
        default: false
    },
    taxonomySelected: {
        type: "string",
    }
};

registerBlockType("mapped-posts/archive", {
    title: __("Map Archive", "carkeek-blocks"),
    description: __(
        "Block displaying listings in a map.",
        "carkeek-blocks"
    ),
    icon: "location-alt",
    category: "mapped-posts",
    edit: edit,
    attributes: attributes,
    supports: {
        align: ["wide", "full"]
    },
    save() {
        return (
            <div></div>
        );
    }
});
