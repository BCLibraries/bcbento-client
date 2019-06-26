import React from 'react';

function ErrorBox({header}) {
    return (
        <div>
            <h2>{header}</h2>
            <div className="bento-results-box__error-notice">There was an error performing this search.</div>
        </div>
    );
}

export default ErrorBox;