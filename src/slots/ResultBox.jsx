import React from 'react';
import useFetchResultList from "./UseFetchResultList";
import SeeAllLink from "./SeeAllLink";

function ResultBox({render, heading, term, searchString, baseUrl, classPrefix, noResultsMessage}) {
    const {data, loading} = useFetchResultList(searchString, baseUrl);
    let body;
    noResultsMessage = noResultsMessage ? noResultsMessage : 'There are no results matching your search.';

    if (loading) {
        body = <div className='bento-results-box__loading-notice'>Loading</div>
    } else if (data.error) {
        body = <div className="bento-results-box__error-notice">There was an error performing this search.</div>;
    } else if (!data.total_results) {
        body = <div className="bento-results-box__no-results-notice">{noResultsMessage}</div>
    } else {
        body = (
            <ol className={`${classPrefix}-results-list`}>
                {render(data)}
                <SeeAllLink url={data.search_url} total={data.total_results} found={data.items.length} term={term}/>
            </ol>
        );
    }

    return (
        <div className="bento-results-box">
            <h3 className="bento-results-box__header"><a href={data.search_url}>{heading}</a></h3>
            {body}
        </div>
    );
}

export default ResultBox;