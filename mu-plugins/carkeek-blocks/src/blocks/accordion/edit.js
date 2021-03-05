import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { RichText, InnerBlocks } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";


class CollapseSectionEdit extends Component {
    render() {
        const { attributes, isSelected, setAttributes } = this.props;
        const { title, content } = attributes;
        const showControls = (isSelected || !title) ? true : false;
        const
        allowedBlocks = [
            'core/paragraph',
            'core/heading',
            'core/list',
            'core/image'
        ],
        template = [
            [ 'core/paragraph', { placeholder: 'Enter panel content...' } ],
        ];
        return(
            <>
            <RichText
                tagName = "button"
                value={ title }
                allowedFormats={ [ ] }
                className={'wp-blocks-carkeek-accordion__header'}
                onChange={ ( title ) => setAttributes( { title } ) }
                placeholder={ __('Section Heading...')}
            />

            <InnerBlocks
                className={'wp-blocks-carkeek-accordion__inner-blocks'}
                allowedBlocks = { allowedBlocks }
                template = { template }
            />

            </>
        )
    }
}
export default CollapseSectionEdit;
