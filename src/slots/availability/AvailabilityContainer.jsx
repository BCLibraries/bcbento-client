import React from 'react';
import NotAvailableMessage from "./NotAvailableMessage";
import Availability from "./Availability";

/**
 * Display an item's available holdings
 *
 * @param item
 * @return {*}
 * @constructor
 */
function AvailabilityContainer({item}) {
    if(item.availability) {
        return <Availability firstHolding={item.availability} inOtherLibraries={item.availability.otherAvailabilities} />
    } else {
        return <NotAvailableMessage item={item}/>;
    }
}

export default AvailabilityContainer;