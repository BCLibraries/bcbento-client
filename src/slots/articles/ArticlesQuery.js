import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

class ArticlesQuery {
    gql;
    object = 'searchArticles'

    constructor(searchString) {
        this.gql = forArticles(searchString);
    }
}

/**
 * Get query for articles
 *
 * @param searchString string
 */
function forArticles(searchString) {
    return gql`
{
  searchArticles( keyword: "${cleanGraphQLInput(searchString)}", limit: 3) {
    docs {
      id,
      title,
      date,
      type,
      creator,
      contributors,
      coverImages {
        url
      },
      isPartOf,
      journalTitle
    },   
    didUMean,
    total
  }
}`;
}

export {ArticlesQuery};