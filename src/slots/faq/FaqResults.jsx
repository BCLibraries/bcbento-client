import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import FaqResult from "./FaqResult";
import BentoResultError from "../BentoResultError";
import SeeAllLink from "../SeeAllLink";

function FaqResults({searchString}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/faq');

    // Only use first 4 results.
    data.items = data.items.slice(0, 4);

    const body = loading ? <div className='loading-notice'>Loading</div> : questionList(data.items);

    return <div className="faq-results-box">
        <SeeAllLink url={data.search_url} total={data.total_results} found={data.items.length}/>
        <h2 className="faq-results-box__header">Frequently asked questions</h2>
        {data.error ? <BentoResultError message="There was an error searching the FAQ."/> : body}
    </div>;
}

function questionList(questions) {
    if (questions.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <ol className="faq-results-list">
        {questions.map((question) => <FaqResult key={`${question.id}`} result={question}/>)}
    </ol>;
}

export default FaqResults;