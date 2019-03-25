import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import WebsiteResult from "./WebsiteResult";

function WebsiteResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/website');

    data.items = data.items.slice(0, 4);

    const body = loading ? <div className='loading-notice'>Loading</div> : websiteHitsList(data.items);

    return <div className="website-results-box">
        <h2>Website results</h2>
        {body}
    </div>;
}

function websiteHitsList(hits) {
    if (hits.length === 0) {
        return <div className="no-results-found">
            No results found matching your search.
        </div>
    }

    return <ul className="website-results-list">
        {hits.map((hit) => <WebsiteResult key={hit.url} hit={hit}/>)}
    </ul>;
}

export default WebsiteResults;