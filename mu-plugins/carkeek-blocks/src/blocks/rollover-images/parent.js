import icons from './icons';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

const attributes = {
    columns: {
        type: "number",
        default: 4,
    },
    headline: {
        type: "string"
    },
    staticContent: {
        type: "string"
    },
    headlineLevel: {
        type: "number",
        default: '2'
    },
    innerBlocksHeadlineLevel: {
        type: "number",
        default: '3'
    }
};

registerBlockType("carkeek-blocks/rollover-images", {
    title: __("Rollover Images", "carkeek-blocks"),

    description: __(
        "Display a collection of rollover images with related text",
        "carkeek-blocks"
    ),

    icon: {
        src: icons.swap,
    },

    category: "widgets",

    supports: {
        html: false,
        align: ["wide", "full"]
    },

    keywords: [
        __("images", "carkeek-blocks"),
        __("rollover", "carkeek-blocks"),
    ],

    attributes,

    edit({ className, attributes, setAttributes, isSelected }) {
        const { columns, headline, headlineLevel, innerBlocksHeadlineLevel, staticContent } = attributes;
        const headlineStyle = 'h' + headlineLevel;
        const updateColumns = ( value ) => {
            setAttributes( {
                columns: value,
            });
        }
        return (
            <>
            <InspectorControls>
                    <PanelBody>
                        <RangeControl
                            label={__("Columns", "carkeek-blocks")}
                            value={columns}
                            onChange={ updateColumns }
                            min={1}
                            max={6}
                        />
                        <RangeControl
                            label={__("Heading Size", "carkeek-blocks")}
                            value={headlineLevel}
                            onChange={value =>
                                setAttributes({ headlineLevel: value })
                            }
                            min={2}
                            max={6}
                        />
                        <RangeControl
                            label={__("Inner BlocksHeading Size", "carkeek-blocks")}
                            value={innerBlocksHeadlineLevel}
                            onChange={value =>
                                setAttributes({ innerBlocksHeadlineLevel: value })
                            }
                            min={2}
                            max={6}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={`${className} has-${columns}-columns`}>
                    <RichText
                        tagName={ headlineStyle }
                        value={ headline }
                        onChange={ ( headline ) => setAttributes( { headline } ) }
                        placeholder={ __('Heading...')}
                        formattingControls={ [ ] }
                    />
                    <RichText
                        tagName={ 'p' }
                        value={ staticContent }
                        onChange={ ( staticContent ) => setAttributes( { staticContent } ) }
                        placeholder={ __('Default content...')}
                    />

                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/rollover-image"]}
                    template={[
                        ["carkeek-blocks/rollover-image"],
                    ]}
                    orientation="horizontal"
                />
            </div>
            </>
        );
    },

    save( { attributes } ) {
        const { columns, headlineLevel, headline, innerBlocksHeadlineLevel, staticContent } = attributes;
        const headlineStyle = 'h' + headlineLevel ;
        return (
            <div className={`has-${columns}-columns innerblock-headline-style-h${innerBlocksHeadlineLevel}`}>
                <RichText.Content tagName={ headlineStyle } className={'rollover-images__headline'} value={ headline } />
                <div className={'rollover-images__inner'}>
                    <InnerBlocks.Content />
                </div>
                <div className={'rollover-images__footer'}>
                    <RichText.Content tagName={ 'span' } className={ 'rollover-images__default-content'} value={ staticContent } />
                    <div className={'rollover-images__hover-content'}></div>
                </div>
            </div>
        );
    }
});
