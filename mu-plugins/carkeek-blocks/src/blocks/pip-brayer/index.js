import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import icons from './icons';
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RadioControl } from "@wordpress/components";


const attributes = {
    color: {
        type: "string",
        default: 'pink',
    },
    alignBG: {
        type: "string",
        default: 'right',
    }
};

registerBlockType("carkeek-blocks/pip-brayer", {
    title: __("Brayer Background", "carkeek-blocks"),

    description: __(
        "Block with a brayer stripe background",
        "carkeek-blocks"
    ),

    icon: icons.brayer,

    category: "widgets",

    supports: {
        html: false,
        align: ["full", "wide"]
    },

    keywords: [
        __("background", "carkeek-blocks"),
        __("brayer", "carkeek-blocks"),
        __("yellow", "carkeek-blocks"),
        __("pink", "carkeek-blocks"),
        __("blue", "carkeek-blocks")
    ],

    attributes,

    edit({ className, attributes, setAttributes }) {
        const { color, alignBG } = attributes;
        const template = [
            [ 'core/heading', { textAlign: 'center'} ],
            [ 'core/paragraph', { align: 'center', fontSize: 'large' } ],
            [ 'core/buttons', { align: 'center' }, [
                ['core/button', { className : 'is-style-arrow-cta', text : 'Learn more'} ]
            ] ],
        ];
        return (
            <div className={`${className} has-brayer-background brayer-background-${color} brayer-background-${alignBG} alignfull`}>
                <InspectorControls>
                    <PanelBody>
                        <RadioControl
                            label={__("Background Color", "carkeek-blocks")}
                            selected={color}
                            onChange={( value ) => { setAttributes( { color: value } ) } }
                            options={ [
                                { label: 'Pink', value: 'pink' },
                                { label: 'Yellow', value: 'yellow' },
                                { label: 'Blue', value: 'blue' },
                            ] }
                        />
                        <RadioControl
                            label={__("Align Background", "carkeek-blocks")}
                            selected={alignBG}
                            onChange={( value ) => { setAttributes( { alignBG: value } ) } }
                            options={ [
                                { label: 'Left', value: 'left' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'right' },
                            ] }
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks
                    template={template}
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { color, alignBG } = attributes;
        return (
            <div className={`has-brayer-background brayer-background-${color} brayer-background-${alignBG} alignfull`}>
                <div className="brayer-background-inner">
                <InnerBlocks.Content />
                </div>
            </div>
        );
    }
});