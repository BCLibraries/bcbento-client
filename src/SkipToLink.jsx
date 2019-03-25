import React from 'react';

function SkipToLink({target, label}) {

    const handleClick = (event) => {
        if (target.current) {
            target.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return <div><span className="link-to-results__skip_to_link" onClick={handleClick}>{label}</span></div>;

}

export default SkipToLink;