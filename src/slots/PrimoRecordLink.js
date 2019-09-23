/**
 * Return a link to a record in Primo
 *
 * @param item
 * @return {string}
 * @constructor
 */
function PrimoRecordLink(item) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${item.id}&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US`;
}

export {PrimoRecordLink};