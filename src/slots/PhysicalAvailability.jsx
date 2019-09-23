import React from 'react';
import {PrimoRecordLink} from "./PrimoRecordLink";

function PhysicalAvailability({item}) {
    // Physical item, not available on shelf.
    if (! item.available || item.holdings.length === 0) {
        return <div>
            Not available. <a href={PrimoRecordLink(item)}>Check for more options</a>.
        </div>
    }


    const all_items = [];
    let holding, avail_items;

    for (let i=0; i < item.holdings.length; i++) {
        holding = item.holdings[i];
        avail_items = holding.items.filter(item => item.availability === 'available');
        Array.prototype.push.apply(all_items, avail_items);
    }

    const holdings = all_items.sort(sortLibraries);

    const avail_display = holdings.length > 0 ? itemAvail(holdings[0], item.link, holdings.length) : '';

    return (
        <ul className='available-items-list'>
            {avail_display}
        </ul>
    )
}

function itemAvail(item, link, total) {
    const availClass = item.availability === 'available' ? 'item-info--available' : 'item-info--unavailable';
    const in_other_libraries = total > 1 ? ' and other libraries' : '';

    return (
        <li className={`item-info ${availClass}`}>
            <a href={link}>
                <span className="item-info__library">Find in {item.libraryDisplay}</span>
                <span className="item-info__location">{item.location}</span>
                <span className="item-info__callno">({item.callNumber})</span>
                <span className="item-info__other-libraries">{in_other_libraries}</span>
            </a>
        </li>
    );
}

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

function getLocationScore(libraryCode, location) {
    const library = locationValues[libraryCode];
    return library[location] ? library[location] + library.weight : library.weight;
}

function sortLibraries(a, b) {
    return getLocationScore(a.library, a.locationCode) - getLocationScore(b.library, b.locationCode)
}

export default PhysicalAvailability;