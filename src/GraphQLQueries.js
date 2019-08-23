import gql from "graphql-tag";

/**
 * Collects all GraphQL queries
 *
 * All the GraphQL queries the bento client needs are consolidated in this module.
 */
export default {
    forBooksAndMore,
    forVideos,
    forArticles,
    forFAQ,
    forBestBets
};

/**
 * Get query for books and more
 *
 * @param searchString string
 */
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
      contributors,
      coverImages { 
        url
      },
      available,
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
    didUMean,
    total
  }
}`;
}

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
    didUMean,
    total
  }
}`;
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

/**
 * Get query for FAQ results
 *
 * @param searchString
 */
function forFAQ(searchString) {
    return gql`
{
  searchFAQ( keyword: "${searchString}", limit: 3) {
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
  bestBet( keyword: "${searchString}") {
      title
      displayText
      link
  }
}`
}

function cleanGraphQLInput(string) {
    return string.replace(/"/g, '\\"').replace('/\\/g', '\\');
}