import classnames from "classnames";
import { get, invoke } from "lodash";

import { Component, RawHTML } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import {
    RangeControl,
    PanelBody,
    ToggleControl,
    RadioControl,
    Spinner,
    Placeholder,
    SelectControl,
    __experimentalText as Text
} from "@wordpress/components";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { ServerSideRender } from "@wordpress/editor";

class CustomListArchiveEdit extends Component {

    render() {

        const {
            posts,
            lists,
            className,
            attributes,
            setAttributes,
            isSelected,
            name,
        } = this.props;
        const {
            postsToShow,
            listSelected,
            hideIfEmpty,
            emptyMessage,
            headline,
            headlineLevel,
            sortBy,
            order,
            makeCollapsible
        } = attributes;
        const headlineStyle = 'h' + headlineLevel;
        const icons = {
            pin: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="18px"
                    height="18px"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z" />
                </svg>
            ),
        };
        let options = [];
        if (lists) {
            options = lists.map(type => ({
                value: type.id,
                label: type.name
            }));
        }
        if (!listSelected) {
            const selectAnItem = { value: null, label: 'Select a List'};
            options.unshift(selectAnItem);
        }
        const listSelect = (
            <>
                <SelectControl
                    label={__("Select List", "carkeek-blocks")}
                    onChange={ ( listSelected ) => setAttributes( { listSelected } ) }
                    options={ options }
                    value={listSelected}
                />
            </>
        );
        const inspectorControls = (
            <InspectorControls>
                <PanelBody title={__("List Settings Settings", "carkeek-blocks")}>
                    {listSelect}
                    <SelectControl
                            label={__("Sort Links By", "carkeek-blocks")}
                            onChange={value =>
                                setAttributes({
                                    sortBy: value
                                })
                            }
                            options={[
                                { label: __("Title (alpha)"), value: "title"},
                                { label: __("Menu Order"), value: "menu_order"},
                            ]}
                            value={sortBy}
                        />
                    <RadioControl
                    label={__("Order")}
                    selected={order}
                    options={[
                        { label: __("ASC"), value: "ASC"},
                        { label: __("DESC"), value: "DESC"},

                    ]}
                    onChange={value =>
                        setAttributes({
                            order: value
                        })
                    }
                />

                </PanelBody>
                <PanelBody title={__("Layout", "carkeek-blocks")}>

                    <RangeControl
                        label={__("Heading Size", "carkeek-blocks")}
                        value={headlineLevel}
                        onChange={value =>
                            setAttributes({ headlineLevel: value })
                        }
                        min={2}
                        max={6}
                    />
                    <Text variant="label">Expand and Collapse</Text>
                    <ToggleControl
                        label={__("Make sub-topics expand and collapse", "carkeek-blocks")}
                        checked={makeCollapsible}
                        onChange={value =>
                            setAttributes({ makeCollapsible: value })
                        }
                    />
                </PanelBody>
            </InspectorControls>
        );

        if (!listSelected) {
            const noPostMessage = __("Select a List Type from the Block Settings");

            return (
                <>
                    {inspectorControls}
                    <RichText
                        tagName={ headlineStyle }
                        value={ headline }
                        onChange={ ( headline ) => setAttributes( { headline } ) }
                        placeholder={ __('Heading...')}
                        formattingControls={ [ ] }
                    />

                    <Placeholder icon={icons.pin} label={ headline ? headline : __("Link List")}>
                        <Spinner /> { noPostMessage }
                    </Placeholder>
                </>
            );
        } else {

        return (
            <>
                {inspectorControls}
                <RichText
                    tagName={ headlineStyle }
                    className={ 'cll-headline-edit' }
                    value={ headline }
                    onChange={ ( headline ) => setAttributes( { headline } ) }
                    placeholder={ __('Heading...')}
                    formattingControls={ [ ] }
                />
                <div className="server-side-render">
                    <div className="server-side-render__overlay"></div>
                <ServerSideRender
                    block={name}
                    attributes={{
                        sortBy: sortBy,
                        listSelected: listSelected,
                        headline: headline,
                        order: order,
                        makeCollapsible: makeCollapsible,
                        headlineLevel: headlineLevel,
                    }}
                />
                <div className="notes">List preview. To edit the content visit Custom Links in the admin dashboard.</div>
                </div>
            </>
        );
                }
    }
}

export default withSelect((select, props) => {
    const postType = 'custom_link';
    const listTax = 'link_list';
    const { attributes } = props;
    const { getEntityRecords } = select("core");
    const { listSelected, order, sortBy } = attributes;
    const lists = getEntityRecords('taxonomy', listTax, { per_page: -1, parent: 0, orderby: 'name', order: 'asc' } );
    let query = { per_page: -1, order: order.toLowerCase() , orderby: sortBy };
    let latestPosts = '';
    if (listSelected ) {
        query[listTax] = listSelected;
        latestPosts = getEntityRecords("postType", postType, query);
    }


    return {
        lists: lists,
        listSelected:  Array.isArray(lists) && lists.length == 1 ? lists[0] : listSelected,
        posts: !Array.isArray(latestPosts)
            ? latestPosts
            : latestPosts.map(post => {
                  return post;
              })
    };
})(CustomListArchiveEdit);
