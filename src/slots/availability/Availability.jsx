import React from "react";

/**
 * Message to display for available item
 *
 * @param firstHolding
 * @param inOtherLibraries
 * @return {*}
 * @constructor
 */
function Availability({firstHolding, inOtherLibraries}) {
    return (
        <ul className='available-items-list'>
            <li className={`item-info item-info--available`}>
                <a href={firstHolding.link}>
                    <span className="item-info__library">Find in {firstHolding.libraryName}</span>
                    <span className="item-info__location">{firstHolding.locationName}</span>
                    <span className="item-info__callno">({firstHolding.callNumber})</span>
                    <span className="item-info__other-libraries">{inOtherLibraries && ' and other libraries'}</span>
                </a>
            </li>
        </ul>
    );

}

export default Availability;