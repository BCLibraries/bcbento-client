import React from 'react';

function PhysicalAvailability({item}) {

    // Physical item, not available on shelf.
    if (!item.is_avail && !item.getit) {
        return <div>Not available. <a href={item.link}>Check for more options</a>.</div>
    }

    const availabilities = item.avail.filter(avail => avail.on_shelf);

    return <ul className='available-items-list'>
        {availabilities.map((avail) => avaiabilityLine(avail, item.link))}
    </ul>
}

function avaiabilityLine(availability, link) {
    const availClass = availability.on_shelf ? 'available' : 'unavailable';
    const key = availability.library + '-' + availability.loc_display;

    return <li className={['item-info', availClass]} key={key}>
        <a href={link}>
            <span className="item-info__library">Find in {availability.lib_display}</span>
            <span className="item-info__location">{availability.loc_display}</span>
            <span className="item-info__callno">({availability.call_number})</span>
        </a>
    </li>
}

export default PhysicalAvailability;