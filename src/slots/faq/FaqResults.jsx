import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import FaqResult from "./FaqResult";

function FaqResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/faq');
    const loadingNotice = loading ? <div className='loading-notice'>Loading</div> : <span/>

    // Only use first 4 results.
    data.items = data.items.slice(0, 4);

    return <div className="faq-results-box">
        <h2 className="faq-results-box__header">Frequently asked questions</h2>
        {loadingNotice}
        <ol className="faq-results-list">
            {data.items.map((item) => <FaqResult key={`faq-result-${item.id}`} result={item}/>)}
        </ol>
    </div>;
}

export default FaqResults;