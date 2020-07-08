import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    RichText,
    InnerBlocks
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";



class CollapseSectionEdit extends Component {
    onChangeTitle = title => {
        this.props.setAttributes({ title });
    };
    componentDidMount() {
        this.props.setAttributes({ inheritedHeaderStyle : this.props.headerStyle });
    }
    render() {
        const { headerStyle, attributes, isSelected } = this.props;
        const { title } = attributes;
        const showControls = (isSelected || !title) ? true : false;
        return(
            <>
                {showControls ? (
                    <>
                        <TextControl
                            onChange={this.onChangeTitle}
                            value={title}
                            placeholder={__(
                                "Title",
                                "carkeek-blocks"
                            )}
                        />
                        <InnerBlocks />
                    </>
                ) : (
                    <h4 className={`wp-block-carkeek-blocks-expand-section__header ${headerStyle}`}>{title}</h4>
                )}


            </>
        )
    }
}
export default withSelect((select, props) => {
    const parentId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( props.clientId );
    const parentAttributes = select('core/block-editor').getBlockAttributes( parentId );
    return {
        headerStyle: parentAttributes.headerStyle
    };
})(CollapseSectionEdit);