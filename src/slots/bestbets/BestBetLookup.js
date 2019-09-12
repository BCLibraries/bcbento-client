import React from 'react';
import BestBetResult from "./BestBetResult";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

function BestBetLookup({searchString, client}) {
    const {loading, error, data} = useQuery(forBestBets(searchString), {client});

    if (loading || error || !data.bestBet) {
        return null;
    }

    return <BestBetResult bestBet={data.bestBet}/>;
}

/**
 * Get query for Best Bets
 *
 * @param searchString
 */
function forBestBets(searchString) {
    return gql`
{
  bestBet( keyword: "${cleanGraphQLInput(searchString)}") {
      title
      displayText
      link
  }
}`
}

export default BestBetLookup;