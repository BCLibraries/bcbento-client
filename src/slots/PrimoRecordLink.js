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

    const tab = isPci ? 'CentralIndex' : 'LibraryCatalog';
    const scope = isPci ? 'CentralIndex' : 'MyInstitution';
    const context = isPci ? 'PC' : 'L';
    const adaptor  = isPci ? 'Primo%20Central' : 'Local%20Search%20Engine';
    let id = item.id;
    if (isPci && item.linkableId) {
        id = item.linkableId;
    }

    const queryString = [
        `docid=${id}`,
        `context=${context}`,
        'vid=01BC_INST:bclib',
        'lang=en',
        `search_scope=${scope}`,
        `adaptor=${adaptor}`,
        `tab=${tab}`,
        // `query=any,contains,jstor` @todo add search query to item Deep Links
    ].join('&');

    return `https://bc.primo.exlibrisgroup.com/discovery/fulldisplay?${queryString}`;
}

export {PrimoRecordLink};
