import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import SeeAllLink from "./SeeAllLink";
import LoadingBox from "./LoadingBox";
import ErrorBox from "./ErrorBox";
import NoResultsBox from "./NoResultsBox";
import ResultList from "./ResultList";

/**
 * A single result class box
 *
 * @param client object GraphQL client
 * @param heading string Heading for the box (e.g. "Books & more")
 * @param term string Term for result (e.g. "articles")
 * @param classPrefix string Prefix for element class
 * @param searchUrl string URL to link to search.
 * @param renderResult function Function that maps a GraphQL doc to a single JSX result entry
 * @param query object The GraphQL query to execute.
 * @return {*}
 * @constructor
 */
function NewResultsBox({client, heading, term, classPrefix, renderResult, query}) {

    // Perform GraphQL query
    const {loading, error, data} = useQuery(query.gql, {client});

    let body;
    let seeAll = '';
    let searchUrl = '';

    if (loading) {
        body = <LoadingBox heading={heading}/>
    } else if (error) {
        body = <ErrorBox heading={heading}/>
    } else if (data[query.object].total === 0) {
        body = <NoResultsBox heading={heading}/>
    } else {

        // Success! Build response.
        const docs = data[query.object].docs ? data[query.object].docs : data[query.object].results;
         searchUrl = data[query.object].searchUrl;

        body = <ResultList classPrefix={classPrefix} docs={docs} renderResult={renderResult}/>;
        seeAll = <SeeAllLink term={term} total={data[query.object].total} found={docs.length} url={searchUrl}/>;
    }

    return <div className="bento-results-box" aria-live="polite">
        <div className="bento-results-box__header-row">
            {boxHeading(heading, searchUrl)}
            {seeAll}
        </div>
        {body}
    </div>
}

/**
 * Add link to heading if appropriate
 *
 * @param text string The content of the heading
 * @param searchUrl string|boolean URL that links to the search.
 * @return {*}
 */
function boxHeading(text, searchUrl = false) {
    return searchUrl ? (<h2><a href={searchUrl}>{text}</a></h2>) : (<h2>{text}</h2>);
}

export default NewResultsBox;