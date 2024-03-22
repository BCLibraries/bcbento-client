import React from 'react';

/**
 * Primo GetIt link
 *
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
function GetItLink({url}) {
    return <div className="catalog-result-item__getit"><a href={url}>Find online</a></div>;
}

export default GetItLink;
