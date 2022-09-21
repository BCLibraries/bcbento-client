import {PrimoRecordLink} from "../PrimoRecordLink";
import React from "react";
import {lookupLibraryName} from "../../LibraryNames";

function checkHoldingsMessage({item, library, location}) {
    const holdingDisplay = item.holdings.length > 0 ? buildHoldingDisplay(item.holdings[0]) : '';

    console.log(item);
    console.log(item.holdings);
    return (
        <div className="item-info item-info--check-holdings">
            <span className="item-info__instructions">
                <a href={PrimoRecordLink(item, false)}>Check "Find in Library"</a>
                {holdingDisplay}
            </span>
        </div>
    );
}

function buildHoldingDisplay(firstHolding) {
    const libraryName = lookupLibraryName(firstHolding.libraryCode);

    return (
        <span>
            <span className="item-info__location"> {libraryName}</span>
            <span className="item-info__location"> {firstHolding.locationDisplay}</span>
            <span className="item-info__callno"> ({firstHolding.callNumber})</span>
        </span>
    );
}

export default checkHoldingsMessage;