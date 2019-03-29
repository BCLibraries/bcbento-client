import React from 'react';

function SlotHeading({children, classPrefix, url}) {
    return <h2 className={`${classPrefix}-results-box__header`}><a href={url}>{children}</a></h2>;
}

export default SlotHeading;