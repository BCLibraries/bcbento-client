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
    } else if (item.available === true || item.holdings[0].availabilityStatus === 'check_holdings') {
        // If we've gotten here, something is wrong.
        return <CheckHoldingsMessage item={item} />
    } else {
        return <NotAvailableMessage item={item}/>;
    }
}

export default AvailabilityContainer;