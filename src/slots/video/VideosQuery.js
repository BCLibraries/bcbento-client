import gql from "graphql-tag";
import {cleanGraphQLInput} from "../cleanGraphQLInput";

class VideosQuery {
    gql;
    object = 'searchVideo'

    constructor(searchString) {
        this.gql = forVideos(searchString);
    }}

/**
 * Get query for videos
 *
 * This query is the same as for Books & More.
 *
 * @param searchString string
 * @return {*}
 */
function forVideos(searchString) {
    return gql`
{
  searchVideo( keyword: "${cleanGraphQLInput(searchString)}", limit: 3) {
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
      isPhysical,
      isElectronic,
      screenCap,
      format,
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

export {VideosQuery};