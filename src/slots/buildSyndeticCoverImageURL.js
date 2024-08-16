function buildSyndeticCoverImageURL(item) {
    return `https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?isbn=${item.isbn}/MC.JPG&client=primo`;
}

export default buildSyndeticCoverImageURL;