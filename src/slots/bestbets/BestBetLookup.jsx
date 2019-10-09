import React from 'react';
import BestBetResult from "./BestBetResult";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {cleanGraphQLInput} from "../cleanGraphQLInput";
import FullTextResult from "./FullTextResult";

function BestBetLookup({searchString, client}) {
    const {loading, error, data} = useQuery(forBestBets(searchString), {client});

    if (loading || error || !data.bestBet) {
        return null;
    }

    if (data.bestBet.displayText) {
        return <BestBetResult bestBet={data.bestBet}/>;
    }

    return <FullTextResult crossref={data.bestBet.fullText.crossRefData} libKey={data.bestBet.fullText.libKeyData}/>;
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
    id
    title
    ...on LocalBestBet {
      displayText
      link
    }
    ...on CitationBestBet {
      fullText {
        libKeyData {
          fullTextFile,
          browzineWebLink
          contentLocation
        }
        crossRefData {
          titles
          DOI
          authors {
            givenName
            familyName
            sequence
          }
          containerTitles
          volume
          issue
          page
          publishedPrintDate
        }
      }
    }
  }
}`
}

export default BestBetLookup;