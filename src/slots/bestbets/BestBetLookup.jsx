import React from 'react';
import BestBetResult from "./BestBetResult";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import {cleanGraphQLInput} from "../cleanGraphQLInput";
import FullTextResult from "./FullTextResult";
import {buildFulltextFromCrossref} from "./CrossrefFulltextBuilder";
import {buildFulltextFromPCI} from "./PCIFulltextBuilder";

function BestBetLookup({searchString, client, articleResults}) {
    const {loading, error, data} = useQuery(forBestBets(searchString), {client});

    // No result (yet).
    if (loading || error) {
        return null;
    }

    // Local best bet (e.g. database, LibAnswers question, etc).
    if (data.bestBet && data.bestBet.displayText) {
        return <BestBetResult bestBet={data.bestBet}/>;
    }

    // Don't return full text best bets until we can compare them against the article list.
    if (!articleResults) {
        return null;
    }

    // If there is a fullText best bet and it is not a review, display it.
    if (data.bestBet && data.bestBet.fullText && !doiIsReview(data.bestBet.fullText.crossRefData.DOI, articleResults)) {
        const fulltextItem = buildFulltextFromCrossref(data.bestBet.fullText.crossRefData);
        const libKey = data.bestBet.fullText.libKeyData;

        return (
            <FullTextResult
                title={fulltextItem.title}
                source={'crossref'}
                doi={fulltextItem.doi}
                authors={fulltextItem.authors}
                containerTitle={fulltextItem.containerTitle}
                issueInfo={fulltextItem.issueInfo}
                date={fulltextItem.date}
                link={libKey.fullTextFile ? libKey.fullTextFile : libKey.contentLocation}
            />
        );
    }

    const articleHits = findPossibleMatches(searchString, articleResults);
    if (articleHits.length > 0) {
        const fullTextItem = buildFulltextFromPCI(articleHits[0]);
        const libKey = articleHits[0].libkeyAvailability;
        return <FullTextResult
            title={fullTextItem.title}
            source={'pci'}
            doi={fullTextItem.doi}
            authors={fullTextItem.authors}
            containerTitle={fullTextItem.containerTitle}
            issueInfo={fullTextItem.issueInfo}
            date={fullTextItem.date}
            link={libKey.fullTextFile ? libKey.fullTextFile : libKey.contentLocation}
        />
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

function findPossibleMatches(searchString, articleRecords) {
    const fixedSearchString = searchString.toLowerCase().trim();
    return articleRecords.filter(article => {
        return article.title.length > 40 && fixedSearchString === article.title.toLowerCase().trim();
    });
}

export default BestBetLookup;