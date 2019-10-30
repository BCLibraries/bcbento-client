import React from 'react';
import BestBetResult from "./BestBetResult";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {cleanGraphQLInput} from "../cleanGraphQLInput";
import FullTextResult from "./FullTextResult";

function BestBetLookup({searchString, client, articleResults}) {
    const {loading, error, data} = useQuery(forBestBets(searchString), {client});

    // Don't display a best bet if we don't have a best bet or if we haven't gotten our articleResults back yet.
    if (loading || error || !data.bestBet || !articleResults) {
        return null;
    }

    if (data.bestBet.displayText) {
        return <BestBetResult bestBet={data.bestBet}/>;
    }

    // If there is a fullText best bet and it is not a review, display it.
    if (data.bestBet.fullText && !doiIsReview(data.bestBet.fullText.crossRefData.DOI, articleResults)) {
        return <FullTextResult crossref={data.bestBet.fullText.crossRefData} libKey={data.bestBet.fullText.libKeyData}/>;
    }

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

/**
 * Is the DOI a review?
 *
 * @param {string} fullTextDOI
 * @param {Object[]} articleRecords
 * @param {string} articleRecords[].doi
 */
function doiIsReview(fullTextDOI, articleRecords) {
    // Look through the article results for matching DOIs that are reviews.
    let isReview = false;
    fullTextDOI = fullTextDOI.toLowerCase();

    articleRecords.forEach(article => {
        const articleDOI = article.dOI ? article.dOI.toLowerCase() : '';
        if (fullTextDOI === articleDOI && article.type === 'review') {
            isReview = true;
        }
    });

    return isReview;
}

export default BestBetLookup;