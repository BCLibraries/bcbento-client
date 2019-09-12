import gql from "graphql-tag";
import {cleanGraphQLInput} from "./slots/cleanGraphQLInput";

/**
 * Collects all GraphQL queries
 *
 * All the GraphQL queries the bento client needs are consolidated in this module.
 */
export default {
    forFAQ,
    forBestBets
};

/**
 * Get query for FAQ results
 *
 * @param searchString
 */
function forFAQ(searchString) {
    return gql`
{
  searchFAQ( keyword: "${cleanGraphQLInput(searchString)}", limit: 3) {
    results {
      id,
      question,
      url
    },   
    searchUrl,
    total
  }
}`
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