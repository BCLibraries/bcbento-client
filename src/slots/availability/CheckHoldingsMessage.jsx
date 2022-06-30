import {PrimoRecordLink} from "../PrimoRecordLink";
import React from "react";

function checkHoldingsMessage({item, library, location}) {
    return (
        <div className="item-info item-info--check-holdings">
            <span className="item-info__instructions">
                <a href={PrimoRecordLink(item, false)}>Check "Find in Library"</a>
            </span>
        </div>
    );
}

export default checkHoldingsMessage;