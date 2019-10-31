import React from 'react';
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {cleanGraphQLInput} from "../cleanGraphQLInput";
import {decideBestBet} from "./decideBestBet";
import {LocalBestBet} from "./LocalBestBet";
import LocalBestBetResult from "./LocalBestBetResult";
import {FullTextItem} from "./FullTextItem";
import FullTextResult from "./FullTextResult";

/**
 * Find and show the appropriate best bet
 *
 * @param {string} searchString
 * @param {object} client Apollo client
 * @param {object[]} articleResults Array of article results from PCI
 * @return {null|*}
 * @constructor
 */
function BestBetLookup({searchString, client, articleResults}) {
    const {loading, error, data} = useQuery(forBestBets(searchString), {client});

    // Don't display anything until we have both article results and best bet lookup results.
    if (loading || error || !data || !articleResults) {
        return null;
    }

    // Decide on a best bet from all available data.
    const bestBet = decideBestBet(data.bestBet, articleResults, searchString);
    if (bestBet instanceof LocalBestBet) {
        return <LocalBestBetResult bestBet={bestBet}/>
    } else if (bestBet instanceof FullTextItem) {
        return (
            <FullTextResult fullText={bestBet}/>
        );
    }

    // Didn't find a best bet...
    return null;
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