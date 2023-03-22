import React from 'react';

function CoverImage({itemUrl, imageUrl, specialClass}) {
    const className = `cover-image ${specialClass}`;
    return <div className="media-right">
        <a href={itemUrl} aria-hidden="true" tabIndex={-1}>
            <img src={imageUrl} alt="" className={className}/>
        </a>
    </div>
}

export default CoverImage;
