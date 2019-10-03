import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import SeeAllLink from "./SeeAllLink";
import LoadingBox from "./LoadingBox";
import ErrorBox from "./ErrorBox";
import NoResultsBox from "./NoResultsBox";
import ResultList from "./ResultList";
import ResultsBox from "./ResultsBox";

/**
 * Fetch data from GraphQL and render result box
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
function ResultsBoxContainer({client, heading, term, classPrefix, renderResult, query}) {

    try {
        // Perform GraphQL query
        const {loading, error, data} = useQuery(query.gql, {client});

        if (loading) {
            return <LoadingBox heading={heading}/>
        }

        if (error) {
            return <ErrorBox heading={heading}/>
        }

        if (data[query.object].total === 0) {
            return <NoResultsBox heading={heading}/>
        }

        // Success! Build response.
        const docs = data[query.object].docs ? data[query.object].docs : data[query.object].results;
        const searchUrl = data[query.object].searchUrl;
        const seeAll = <SeeAllLink term={term} total={data[query.object].total} found={docs.length} url={searchUrl}/>;
        heading = <a href={searchUrl}>{heading}</a>;

        return (
            <ResultsBox heading={heading} seeAll={seeAll} searchUrl={searchUrl}>
                <ResultList classPrefix={classPrefix} docs={docs} renderResult={renderResult}/>
            </ResultsBox>
        )
    } catch (err) {
        return <ErrorBox heading={heading}/>
    }
}

export default ResultsBoxContainer;