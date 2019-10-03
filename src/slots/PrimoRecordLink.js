/**
 * Return a link to a record in Primo
 *
 * @param item
 * @return {string}
 * @constructor
 */
function PrimoRecordLink(item, isPci) {
    if (!isPci) {
        isPci = false;
    }

    const tab = isPci ? 'pci_only' : 'bcl_only';
    const scope = isPci ? 'pci' : 'bcl';
    const context = isPci ? 'PC' : 'L';

    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${item.id}&context=${context}&tab=${tab}&search_scope=${scope}&vid=bclib_new&lang=en_US`;
}

export {PrimoRecordLink};