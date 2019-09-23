import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

/**
 * Books and more query
 */
class WebsiteQuery {
    gql;
    object = 'searchWebsite';

    constructor(searchString) {
        this.gql = forWebsite(searchString);
    }
}

function forWebsite(searchString) {
    return gql`
{
  searchWebsite( keyword: "${cleanGraphQLInput(searchString)}") {
    total
    searchUrl
    docs {
      title
      guideTitle
      updated
      url
      guideUrl
      fullTitle
      highlight
    }
  }
}`;
}

export {WebsiteQuery};