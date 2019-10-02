import {PrimoRecordLink} from "../PrimoRecordLink";
import React from "react";

function checkHoldingsMessage({item, library, location}) {
    return (
        <div>
            <a href={PrimoRecordLink(item)}>Check "Find in Library"</a>
            <span className="item-info__library">{library}</span>
            <span className="item-info__location">{location}</span>.
        </div>
    );
}

export default checkHoldingsMessage;