import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

/**
 * Books and more query
 */
class LibrariansQuery {
    gql;
    object = 'recommendLibrarian';

    constructor(searchString) {
        this.gql = forLibrarians(searchString);
    }
}

function forLibrarians(searchString) {
    return gql`
{
  recommendLibrarian( keyword: "${cleanGraphQLInput(searchString)}") {
    total
    searchUrl
    docs {
      id
      name
      email
      subjects
      image
    }
  }
}`;
}

export {LibrariansQuery};