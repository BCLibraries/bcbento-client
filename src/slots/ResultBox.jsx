import React from 'react';
import useFetchResultList from "./UseFetchResultList";
import SeeAllLink from "./SeeAllLink";

function ResultBox({render, heading, term, searchString, baseUrl, classPrefix, noResultsMessage}) {
    const {data, loading} = useFetchResultList(searchString, baseUrl);
    const converted_data = convertOldAPIResponses(data);
    let body;

    noResultsMessage = noResultsMessage ? noResultsMessage : 'There are no results matching your search.';

    if (loading) {
        body = <div className='bento-results-box__loading-notice'>Loading</div>
    } else if (converted_data.error) {
        body = <div className="bento-results-box__error-notice">There was an error performing this search.</div>;
    } else if (!converted_data.total_results) {
        body = <div className="bento-results-box__no-results-notice">{noResultsMessage}</div>
    } else {
        body = (
            <div className={`${classPrefix}-results-box`}>
                <ol className={`${classPrefix}-results-list`}>
                    {render(converted_data)}
                </ol>
                <SeeAllLink url={converted_data.search_url} total={converted_data.total_results} found={converted_data.items.length} term={term}/>
            </div>
        );
    }

    return (
        <div className="bento-results-box">
            <div className="bento-results-box__header-row"><h2 className="bento-results-box__header">
                <a href={converted_data.search_url}>{heading}</a></h2>
                <SeeAllLink url={converted_data.search_url} total={converted_data.total_results} found={converted_data.items.length} term={term}/>
            </div>
            {body}
        </div>
    );
}

/**
 * Convert calls from old APIs to new API formats
 *
 * @param original_data
 * @return {{search_url: string, items: Array, total_results: number}}
 */
function convertOldAPIResponses(original_data) {
    if (original_data.error) {
        return original_data;
    }

    const converted = {
        items: [],
        total_results: null,
        search_url: null
    };

    converted.items = original_data.items ? original_data.items : original_data;
    converted.total_results = original_data.total_results ? original_data.total_results : converted.items.length;
    converted.search_url = original_data.search_url ? original_data.search_url : null;

    return converted;
}

export default ResultBox;