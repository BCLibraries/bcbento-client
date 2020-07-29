import React from 'react';

function HathiTrustLink({url}) {
    return <div className="hathi-trust-link">
        <div className="hathi-trust-link__icon">

        </div>
            <a href={url} target="_blank"  rel="noopener noreferrer" >
                Full Text Available at HathiTrust
                <i className="fa fa-external-link" aria-hidden="true"/>
            </a>
    </div>
}

export default HathiTrustLink;