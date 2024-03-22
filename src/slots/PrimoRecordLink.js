/**
 * Return a link to a record in Primo
 *
 * @param item
 * @param {boolean} isPci
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
    let id = item.id;
    if (isPci && item.linkableId) {
        id = item.linkableId;
    }

    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${id}&context=${context}&tab=${tab}&search_scope=${scope}&vid=bclib_new&lang=en_US`;
}

export {PrimoRecordLink};
