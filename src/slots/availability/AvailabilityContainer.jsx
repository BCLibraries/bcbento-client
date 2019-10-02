import React from 'react';
import NotAvailableMessage from "./NotAvailableMessage";
import CheckHoldingsMessage from "./CheckHoldingsMessage";
import Availability from "./Availability";

/**
 * Display an item's available holdings
 *
 * @param item
 * @return {*}
 * @constructor
 */
function AvailabilityContainer({item}) {

    // Build holdings list and display first holding.
    const holdings = buildHoldings(item);
    const firstHolding = holdings.length > 0 ? holdings[0] : null;

    if (item.holdings[0].availabilityStatus === 'check_holdings') {
        return <CheckHoldingsMessage item={item} />
    } else if (firstHolding) {
        return <Availability firstHolding={firstHolding} inOtherLibraries={holdings.length > 1}/>;
    } else {
        return <NotAvailableMessage item={item}/>;
    }
}

/**
 * Stores library and location weights for sorting holdings.
 *
 * Entries are formatted like:
 *
 *     'library code': {
 *         weight: 0,
 *         'location 1 display': -1,
 *         'location 2 display': 2
 *     }
 *
 *  Where:
 *
 *     * library code: The three-letter library code used in Alma (e.g. 'ONL', 'ERC')
 *     * weight: How much to weight the library if no location match is found
 *     * location # display: The display string value for a location (e.g. '2 hour reserves'); the value
 *                           is the weighting for items in this location
 *
 *  Items with lower weights will sort higher, so to emphasize a library or location give it a negative
 *  value.
 */
const locationValues = {
    'ONL': {
        weight: -1,
        'Stacks': -3,
        '1st Floor Microfilm': 1
    },
    'TML': {
        weight: 0
    },
    'BAPST': {
        weight: 0
    },
    'BURNS': {
        weight: 0
    },
    'ERC': {
        weight: 0
    },
    'SWK': {
        weight: 0
    },
    'LAW': {
        weight: 0
    },
    'GEO': {
        weight: 1
    },
    'RES_SHARE': {
        weight: 2
    },
    'DEV': {
        weight: 2
    },
    'INT': {
        weight: 1
    }
};

/**
 * Lookup desirability score by library and location
 */
function getLocationScore(libraryCode, location) {
    const library = locationValues[libraryCode];
    return library[location] ? library[location] + library.weight : library.weight;
}

/**
 * Rank two holdings by most desirable library and location
 */
function sortLibraries(holdingA, holdingB) {
    return getLocationScore(holdingA.library, holdingA.locationCode) - getLocationScore(holdingB.library, holdingB.locationCode)
}

/**
 * Build a list of available holdings sorted by most desirable library and location
 */
function buildHoldings(item) {
    const allItems = [];
    let holding, availableItems;

    for (let i = 0; i < item.holdings.length; i++) {
        holding = item.holdings[i];
        availableItems = holding.items.filter(item => item.availability === 'available');
        Array.prototype.push.apply(allItems, availableItems);
    }

    return allItems.sort(sortLibraries);
}

export default AvailabilityContainer;