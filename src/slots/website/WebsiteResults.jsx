import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import WebsiteResult from "./WebsiteResult";
import BentoResultError from "../BentoResultError";

function WebsiteResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/website');

    data.items = data.items.slice(0, 4);

    const body = loading ? <div className="loading-notice">Loading</div> : websiteHitsList(data.items);

    return <div className="website-results-box">
        <h2 className="website-results-box__header">Our website</h2>
        {data.error ? <BentoResultError message="There was an error searching the website."/> : body}
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