import truncateField from "../truncateField";

// Max length of display value.
const truncationLength = 124;

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
        return extractIdentity(item.creator);
    }

    // If no creator, join the contributors.
    if (item.contributors) {
        const contribs = item.contributors.map(contributor => extractIdentity(contributor));
        return contribs.join('; ');
    }

    // If nothing, return an empty string.
    return '';
}

/**
 * Extract the identity string
 *
 * Primo contributors and creators are stored in the format:
 *
 *     Ben Florin, 1974-$$QBen Florin
 *
 * where the part before $$Q is the full identity string and the part after is an abbreviated
 * form. This function pulls out the full form.
 *
 * @param full_string {string} a full string from the creator or contributor fields
 * @return {string} just the bit we need
 */
function extractIdentity(full_string) {
    return full_string.split('$$Q')[0];
}

export {getDisplayCreator};
