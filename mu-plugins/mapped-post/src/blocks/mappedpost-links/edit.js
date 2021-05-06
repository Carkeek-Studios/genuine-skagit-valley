import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";


class MappedPostLink extends Component {
    setLabel = label => {
        this.props.setAttributes({label});
    };
    setUrl = url => {
        this.props.setAttributes({url});
    };
    render() {
        const { attributes, isSelected, siblingsSelected, parentIsSelected } = this.props;
        const { label, url } = attributes;
        if (isSelected || siblingsSelected || parentIsSelected) {
            return(
                <>
                    <TextControl
                        label={__('Link Label', 'mapped-posts')}
                        value={label}
                        onChange={ this.setLabel }
                    />
                    <TextControl
                        value={url}
                        onChange={ this.setUrl }
                        label={__("Link", "carkeek-blocks")}
                    />
                </>
            );
        } else {
            return(
                <div className="mapped-posts-links__link"> {label} </div>
            );
        }
    }
}

export default withSelect((select, props) => {
    const parentId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( props.clientId );
    const siblingsSelected = select('core/block-editor').hasSelectedInnerBlock( parentId );
    const parentIsSelected = select('core/block-editor').isBlockSelected( parentId );
    return {
        siblingsSelected: siblingsSelected,
        parentIsSelected: parentIsSelected
    };
})(MappedPostLink);