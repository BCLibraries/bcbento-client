import React from 'react';
import {Query} from "react-apollo";
import BestBetResult from "./BestBetResult";
import GraphQLQueries from "../../GraphQLQueries";

function BestBetLookup({searchString}) {
    return (
        <Query query={GraphQLQueries.forBestBets(searchString)}>
            {({loading, error, data}) => {
                if (!loading && data && data.bestBet) {
                    return <BestBetResult bestBet={data.bestBet} />;
                } else {
                    return null;
                }
            }}
        </Query>
    );
}

export default BestBetLookup;