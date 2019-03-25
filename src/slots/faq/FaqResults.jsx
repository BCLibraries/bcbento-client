import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import FaqResult from "./FaqResult";

function FaqResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/faq');
    const loadingNotice = loading ? <div className='loading-notice'>Loading</div> : <span/>

    // Only use first 4 results.
    data.items = data.items.slice(0, 4);

    return <div>
        <h2>FAQ results for {searchString}</h2>
        {loadingNotice}
        <ul>
            {data.items.map((item) => <FaqResult key={`faq-result-${item.id}`} result={item}/>)}
        </ul>
    </div>;
}

export default FaqResults;