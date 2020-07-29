import React from 'react';

/**
 * Link to a BC finding aid
 *
 * Icons are provided in styles by the host site, not by this package.
 *
 * @param url
 * @return {*}
 * @constructor
 */
function FindingAidLink({url}) {
    return <div className="hathi-trust-link">
        <div className="finding-aid-link__icon">
            <a href={url} target="_blank"  rel="noopener noreferrer" >
                Finding aid
                <i className="fa fa-external-link" aria-hidden="true"/>
            </a>
        </div>
    </div>
}

export default FindingAidLink;