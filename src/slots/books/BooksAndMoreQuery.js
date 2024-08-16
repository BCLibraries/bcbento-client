import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

/**
 * Books and more query
 */
class BooksAndMoreQuery {
    gql;
    object = 'searchCatalog';

    constructor(searchString) {
        this.gql = forBooksAndMore(searchString);
    }
}

function forBooksAndMore(searchString) {
    return gql`
{
  searchCatalog( keyword: "${cleanGraphQLInput(searchString)}", limit: 3) {
    docs {
      id,
      title,
      date,
      type,
      creator,
      isbn,
      contributors,
      linkableId,
      coverImages { 
        url
      },
      available,
      availability {
        libraryName,
        locationName,
        totalCount,
        callNumber,
        otherAvailabilities
      },
      holdings {
		availabilityStatus,
		availabilityStatus,
		libraryCode,
	    libraryDisplay,
		locationDisplay,
		callNumber,
	  },
      hathitrustUrl,
      linkToFindingAid {
        url
      },
      isPhysical,
      isElectronic,
      screenCap,
      mms
    },   
    searchUrl,
    didUMean,
    total
  }
}`;
}

export {BooksAndMoreQuery};