import truncateField from "../truncateField";

// Max length of display value.
const truncationLength = 120;

/**
 * Return an appropriate display value for creator field
 *
 * @param item
 * @return {string}
 */
function getDisplayCreator(item) {
    return truncateField(getBaseString(item), truncationLength );
}

/**
 * Figure out a good name to put in the creator field
 *
 * @param item
 * @returns {string}
 */
function getBaseString(item) {

    // Prefer the creator field.
    if (item.creator) {
        return item.creator;
    }

    // If no creator, take the first contributor.
    if (item.contributors && item.contributors[0]) {
        return item.contributors[0];
    }

    // Otherwise, give up.
    return '';
}

export {getDisplayCreator};
