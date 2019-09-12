import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

class FAQQuery {
    gql;
    object = 'searchFAQ';

    constructor(searchString) {
        this.gql = forFAQ(searchString);
    }
}

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

export {FAQQuery};