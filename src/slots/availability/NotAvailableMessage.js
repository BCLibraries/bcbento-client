import {PrimoRecordLink} from "../PrimoRecordLink";
import React from "react";

/**
 * Message to display when the item is not available
 *
 * @param item
 * @return {*}
 * @constructor
 */
function NotAvailableMessage({item}) {
    return (
        <div className="item-info item-info--unavailable">
            Not available. <a href={PrimoRecordLink(item)}>Check for more options</a>.
        </div>
    )
}

export default NotAvailableMessage;
