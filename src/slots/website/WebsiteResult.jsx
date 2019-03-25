import React from 'react';

function WebsiteResult({hit}) {
    return <li className="website-hit">
        <h3 className="website-hit__title">
            <a href={hit.url}>{hit.page_title}</a>
        </h3>
        in <a href={hit.guide_url} className="website-hit__guide-title">{hit.guide_title}</a>
        <div className="website-hit__highlight" dangerouslySetInnerHTML={getHighlight(hit)}/>
    </li>
}

function getHighlight(hit) {
    return {__html: hit.highlight[1]};
}

export default WebsiteResult;