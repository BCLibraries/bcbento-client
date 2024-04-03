import React from 'react';

/**
 * Link to
 *
 * @param {number} total the total number of results
 * @param {} found
 * @param term
 * @param url
 * @returns {JSX.Element}
 * @constructor
 */
function SeeAllLink({total, found, term, url}) {
    if(!total) {
        total = 0;
    }

    if (total <= found) {
        return <div className="see-all-link--empty"/>;
    }

    if (!term) {
        return <div className="see-all-link--badge">
            <a href={url}>See all</a>
        </div>;
    }

    return (
        <div className="see-all-link">
            <span className="see-all-link__prefix"></span> <a href={url}>See all {total.toLocaleString()} {term}</a>
        </div>
    );
}

export default SeeAllLink;
