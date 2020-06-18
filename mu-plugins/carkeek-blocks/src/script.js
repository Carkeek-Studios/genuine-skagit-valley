import "./blocks/custom-archive/script";
import "./blocks/link-tile/script";
import "./blocks/link-gallery/script";

import { registerBlockCollection } from "@wordpress/blocks";

registerBlockCollection("carkeek-blocks", {
    title: "Carkeek Blocks",
    icon: "wordpress"
});
