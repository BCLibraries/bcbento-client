import React from 'react';

/**
 * Display an item cover image
 *
 * @param {string} itemUrl the URL of the item (in Primo)
 * @param {string} imageUrl the URL for the cover image
 * @param {string} specialClass any special class value (e.g. video-cover)
 * @returns {JSX.Element}
 * @constructor
 */
function CoverImage({itemUrl, imageUrl, specialClass}) {
    const className = `cover-image ${specialClass}`;
    return <div className="media-right">
        <a href={itemUrl} aria-hidden="true" tabIndex={-1}>
            <img src={imageUrl} alt="" className={className}/>
        </a>
    </div>
}

export default CoverImage;
