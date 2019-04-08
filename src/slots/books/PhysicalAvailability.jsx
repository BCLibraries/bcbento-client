import React from 'react';

function PhysicalAvailability({item}) {

    // Physical item, not available on shelf.
    if (!item.is_avail && !item.getit) {
        return <div>Not available. <a href={item.link}>Check for more options</a>.</div>
    }

    const availabilities = item.avail.filter(avail => avail.on_shelf).sort(sortLibraries);

    const avail_display = availabilities.length > 0 ? itemAvail(availabilities[0], item.link, availabilities.length) : '';

    return (
        <ul className='available-items-list'>
            {avail_display}
        </ul>
    )
}

function itemAvail(availability, link, total) {
    const availClass = availability.on_shelf ? 'item-info--available' : 'item-info--unavailable';
    const in_other_libraries = total > 1 ? ' and other libraries' : '';

    return (
        <li className={`item-info ${availClass}`}>
            <a href={link}>
                <span className="item-info__library">Find in {availability.lib_display}</span>
                <span className="item-info__location">{availability.loc_display}</span>
                <span className="item-info__callno">({availability.call_number})</span>
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
    }
};

function getLocationScore(libraryCode, location) {
    const library = locationValues[libraryCode];
    return library[location] ? library[location] + library.weight : library.weight;
}

function sortLibraries(a, b) {
    return getLocationScore(a.library, a.loc_display) - getLocationScore(b.library, b.loc_display)
}

export default PhysicalAvailability;