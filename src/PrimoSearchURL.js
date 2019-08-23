/**
 * Get an URL for a Primo keyword search
 *
 * @param searchString
 * @return {string}
 * @constructor
 */
function primoSearchURl(searchString, tab, scope) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,${searchString}&tab=${tab}&search_scope=${scope}&vid=bclib_new&lang=en_US&offset=0`;
}

export default primoSearchURl;