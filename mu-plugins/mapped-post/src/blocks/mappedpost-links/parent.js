//import "./styles.editor.scss";
//import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";



registerBlockType("mapped-posts/mappedpost-links", {
    title: __("Mapped Post Links", "mapped-post"),
    description: __(
        "Mapped Post Links Section",
        "mapped-post"
    ),
    icon: "editor-code",
    category: "mapped-posts",
    edit(){
        return(
            <div>
                <div className="mappedpost-inner__label">Farm Links (click to edit)</div>
                <InnerBlocks
                    allowedBlocks={["mapped-posts/link"]}
                />
            </div>
        )
    },
    save() {
        return (
        <div>
                <InnerBlocks.Content />
        </div>
        );
        }
});
