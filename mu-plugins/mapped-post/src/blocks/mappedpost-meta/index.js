import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { TextControl, ToggleControl, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

const attributes = {
    location: {
        type: 'string',
        source: 'meta',
        meta: 'mappedposts_location'
    },
    acreage: {
        type: 'string',
        source: 'meta',
        meta: 'mappedposts_acreage'
    },
    date: {
        type: 'string',
        source: 'meta',
        meta: 'mappedposts_date'
    },
    maponly: {
        type: 'boolean',
        source: 'meta',
        meta: 'mappedposts_maponly',
        default: false
    },

}

registerBlockType("mapped-posts/mappedpost-meta", {
    title: __("Mapped Post Meta", "mapped-post"),
    description: __(
        "Block that holds the meta data for the mapped post",
        "mapped-post"
    ),
    icon: "location",
    category: "mapped-posts",
    attributes,
    edit({attributes, setAttributes}){
        function setLocation( loc ) {
            setAttributes({location: loc});
        }
        function setDate( date ) {
            setAttributes({date: date});
        }
        function setAcreage( acres ) {
            setAttributes({acreage: acres});
        }
        function setMaponly( maponly ) {
            setAttributes({ maponly: maponly });
        }
        return(
            <div>
                <InspectorControls>
                    <PanelBody>
                    <ToggleControl
                    label={__('Map Only', 'mapped-posts')}
                    help={attributes.maponly ? 'Link to Farm Listing will not be displayed' : 'Link to Farm Listing will be displayed'}
                    checked={attributes.maponly}
                    onChange={ setMaponly }
                />
                    </PanelBody>
                </InspectorControls>
                <TextControl
                    label={__('Location', 'mapped-posts')}
                    value={attributes.location}
                    onChange={ setLocation }
                    placeholder={__('City, ST (enter full address down below)', 'mapped-posts')}
                />
                <TextControl
                    label={__('Date Protected', 'mapped-posts')}
                    value={attributes.date}
                    onChange={ setDate }
                />
                <TextControl
                    label={__('Acres', 'mapped-posts')}
                    value={attributes.acreage}
                    onChange={ setAcreage }
                />

            </div>
        )
    },
    save() {
        return null;
    }
});
