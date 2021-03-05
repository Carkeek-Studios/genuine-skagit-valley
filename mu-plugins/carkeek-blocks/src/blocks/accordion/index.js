import "./style.editor.scss";
import "./parent";
import icons from './icons';
import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import { cleanForSlug } from "@wordpress/editor";

const attributes = {
    title: {
        type: "string"
    },
    inheritedHeaderStyle: {
        type: "string"
    },
    content: {
        type: "string"
    }
}

registerBlockType("carkeek-blocks/accordion-panel", {
    title: __("Accordion Panel", "carkeek-blocks"),

    description: __(
        "Build an Accordion with inner blocks",
        "carkeek-blocks"
    ),

    icon: {
        src: icons.dropdown,
    },

    category: "widgets",

    attributes,

    parent: ["carkeek-blocks/accordion"],

    keywords: [
        __("accordion", "carkeek-blocks"),
        __("expand", "carkeek-blocks"),
        __("collapse", "carkeek-blocks")
    ],

    edit,

    save({ attributes } ) {
        const{ title, content } = attributes;
        const acc_id = 'accordion-' + cleanForSlug(title);
        const panel_id = 'accordion-panel' + cleanForSlug(title);
        return (
            <>
                <div className={`wp-blocks-carkeek-accordion__header`}><button id={acc_id} aria-expanded="false" aria-controls={panel_id}>{title}</button></div>
                <div className="wp-blocks-carkeek-accordion__panel" id={panel_id} role="region" aria-labelledby={acc_id} aria-hidden="true">
                    <RichText.Content tagName="div" value={ content } />
                    <InnerBlocks.Content />
                </div>
            </>
        );
    }
});