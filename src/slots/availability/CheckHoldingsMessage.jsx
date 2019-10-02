import {PrimoRecordLink} from "../PrimoRecordLink";
import React from "react";

function checkHoldingsMessage({item}) {
    return (
        <div>
            <a href={PrimoRecordLink(item)}>Check "Find in Library"</a>.
        </div>
    );
}

export default checkHoldingsMessage;