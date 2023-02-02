import React from 'react';
import NotAvailableMessage from "./NotAvailableMessage";
import Availability from "./Availability";
import CheckHoldingsMessage from "./CheckHoldingsMessage";

/**
 * Display an item's available holdings
 *
 * @param item
 * @return {*}
 * @constructor
 */
function AvailabilityContainer({item}) {
    if (item.availability) {
        return <Availability firstHolding={item.availability} inOtherLibraries={item.availability.otherAvailabilities}/>
    } else if (item.available === true || isCheckHoldingsResult(item)) {
        // If we've gotten here, something is wrong.
        return <CheckHoldingsMessage item={item} />
    } else {
        return <NotAvailableMessage item={item}/>;
    }
}

/**
 *  Is this a "check holdings" item?
 *
 *  Check holdings is a catch-all for strange availability data. There are
 *  a number of ways for availability records to be broken, so let's
 *  dedicate an entire function to sussing them out.
 *
 * @param item
 * @returns {boolean} true if we should display check-holdings
 */
function isCheckHoldingsResult(item) {
    if (! item.holdings) {
        return false;
    }

    if (! Array.isArray(item.holdings)) {
        return false;
    }

    if (item.holdings.length === 0) {
        return true;
    }

    if (!item.holdings[0].availabilityStatus ) {
        return true;
    }

    return item.holdings[0].availabilityStatus === 'check_holdings';
}

export default AvailabilityContainer;