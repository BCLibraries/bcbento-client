import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import WebsiteResult from "./WebsiteResult";
import BentoResultError from "../BentoResultError";
import SeeAllLink from "../SeeAllLink";
import LoadingNotice from "../LoadingNotice";
import SlotHeading from "../SlotHeading";

function WebsiteResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/website');

    data.items = data.items.slice(0, 4);

    const body = loading ? <LoadingNotice/> : websiteHitsList(data.items, data.total_results, data.search_url);

    return <div className="website-results-box">
        <SlotHeading url={data.search_url} classPrefix="website">Our website</SlotHeading>
        {data.search_url && <SeeAllLink url={data.search_url} total={data.total_results} found={data.items.length}/>}
        {data.error ? <BentoResultError message="There was an error searching the website."/> : body}
    </div>;
}

function websiteHitsList(hits, total, url) {
    if (hits.length === 0) {
        return <div className="no-results-found">
            No results found matching your search.
        </div>
    }

    return <div>
        <ol className="website-results-list">
            {hits.map((hit) => <WebsiteResult key={hit.url} hit={hit}/>)}
        </ol>
        <SeeAllLink total={total} found={hits.length} term="pages" url={url}/>
    </div>
}   

export default WebsiteResults;