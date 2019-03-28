import React from 'react';

function SeeAllLink({total, found, term, url}) {
    if (total <= found) {
        return <div className="see-all-link--empty"/>;
    }

    if (!term) {
        return <div className="see-all-link--badge">
            <a href={url}>See all</a>
        </div>;
    }

    return <div className="see-all-link">
        > <a href={url}>See all {total.toLocaleString()} {term}</a>
    </div>;
}

export default SeeAllLink;