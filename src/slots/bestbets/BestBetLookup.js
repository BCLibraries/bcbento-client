import React from 'react';
import gql from "graphql-tag";
import {Query} from "react-apollo";
import BestBetResult from "./BestBetResult";
import CleanGraphqlInput from "../../CleanGraphqlInput";

function BestBetLookup({searchString}) {
    const searchFor = CleanGraphqlInput(searchString);
    const graphql = gql`
{
  bestBet( keyword: "${searchFor}") {
      title
      displayText
      link
  }
}`;

    return (
        <Query query={graphql}>
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