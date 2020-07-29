import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

/**
 * Query for only online resources
 */
class OnlineQuery {
    gql;
    object = 'searchOnline';

    constructor(searchString) {
        this.gql = forOnline(searchString);
    }
}

function forOnline(searchString) {
    return gql`
{
  searchOnline( keyword: "${cleanGraphQLInput(searchString)}", limit: 3) {
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
      available,
      hathitrustUrl,
      isPhysical,
      isElectronic,
      screenCap,
      mms,
      holdings {
        ilsId,
        libraryCode,
        locationDisplay,
        locationCode,
        availabilityStatus,
        callNumber,
        items {
          availability,
          locationCode,
          location,
          libraryDisplay,
          library,
          callNumber
         }
       }
    },   
    searchUrl,
    didUMean,
    total
  }
}`;
}

export {OnlineQuery};