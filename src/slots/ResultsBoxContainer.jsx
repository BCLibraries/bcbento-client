import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import SeeAllLink from "./SeeAllLink";
import LoadingBox from "./LoadingBox";
import ErrorBox from "./ErrorBox";
import NoResultsBox from "./NoResultsBox";
import ResultList from "./ResultList";
import ResultsBox from "./ResultsBox";
import ResultBoxErrorBoundary from "./ResultBoxErrorBoundary";

/**
 * Fetch data from GraphQL and render result box
 *
 * @param client GraphQL client
 * @param {string} heading Heading for the box (e.g. "Books & more")
 * @param {string} term Term for result (e.g. "articles")
 * @param {string} classPrefix Prefix for element class
 * @param renderResult Maps a GraphQL doc to a single JSX result entry
 * @param query The GraphQL query to execute.
 * @return {*}
 * @constructor
 */
function ResultsBoxContainer({client, heading, term, classPrefix, renderResult, query, noResultsContent = 'There are no results matching your search.', handleFetch, modifier}) {

    // Perform GraphQL query
    const {loading, error, data} = useQuery(query.gql, {client});

    if (loading) {
        return <LoadingBox heading={heading}/>
    }

    if (error) {
        return <ErrorBox heading={heading}/>
    }

    // Response came back successfully, but there aren't any hits.
    if (data[query.object].total === 0) {
        return <NoResultsBox heading={heading} content={noResultsContent}/>
    }

    // Success! Build response.
    const docs = data[query.object].docs ? data[query.object].docs : data[query.object].results;
    passStateUp(handleFetch, docs);
    const searchUrl = data[query.object].searchUrl;
    const seeAll = <SeeAllLink term={term} total={data[query.object].total} found={docs.length} url={searchUrl}/>;
    heading = <a href={searchUrl}>{heading}</a>;

    return (
        <ResultBoxErrorBoundary heading={heading}>
            <ResultsBox heading={heading} seeAllLink={seeAll} searchUrl={searchUrl}>
                {modifier}
                <ResultList classPrefix={classPrefix} docs={docs} renderResult={renderResult}/>
            </ResultsBox>
        </ResultBoxErrorBoundary>
    )

}

/**
 * Execute callbacks from props and pass list of responses up
 *
 * @param handleFetch
 * @param docs
 */
function passStateUp(handleFetch, docs) {
    if (handleFetch) {
        handleFetch(docs ? docs : []);
    }
}

export default ResultsBoxContainer;
