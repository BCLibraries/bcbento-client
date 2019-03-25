import React from 'react';

function WebsiteResult({hit}) {
    return <div className="website-hit">
        <h3 className="website-hit__title">
            <a href={hit.url}>{hit.page_title}</a>
        </h3>
        in <a href={hit.guide_url} className="website-hit__guide-title">{hit.guide_title}</a>
        <div className="website-hit__highlight" dangerouslySetInnerHTML={getHighlight(hit)}/>
    </div>
}

function getHighlight(hit) {
    return {__html: hit.highlight[1]};
}

export default WebsiteResult;