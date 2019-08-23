import React from 'react';
import FaqResult from "./FaqResult";
import {Query} from "react-apollo";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import GraphQLQueries from "../../GraphQLQueries";


const classPrefix = 'faq';
const heading = 'FAQ';

function FaqResults({searchString}) {
    return (
        <Query query={GraphQLQueries.forFAQ(searchString)}>
            {({loading, error, data}) => {

                if (loading) {
                    return <NewResultsBox heading={heading} status="loading" classPrefix={classPrefix}/>
                } else if (error) {
                    return <NewResultsBox heading={heading} status="error" classPrefix={classPrefix}/>
                } else if (data.searchFAQ.total === 0) {
                    return <NewResultsBox heading={heading}
                                          classPrefix={classPrefix}
                                          noResultsMessage='There are no results matching your search.'
                    />
                }

                const results = data.searchFAQ.results.map(result => <FaqResult result={result}  key={`answer-${result.id}`}/>);

                const seeAllLink = (
                    <SeeAllLink
                        term={"questions"}
                        total={data.searchFAQ.total}
                        found={data.searchFAQ.results.length}
                        url={data.searchFAQ.searchUrl}
                    />
                );


                return (
                    <NewResultsBox
                        results={results}
                        heading={heading}
                        searchUrl={data.searchFAQ.searchUrl}
                        classPrefix={classPrefix}
                        seeAll={seeAllLink}
                    />
                );
            }}
        </Query>
    );
}

export default FaqResults;