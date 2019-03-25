import React from 'react';
import PhysicalAvailability from "./PhysicalAvailability";

function BookResult({item}) {
    return <div className="catalog-result-item media">

        <h3 className="catalog-result-item__media-heading">
            <a href={item.link} className="catalog-result-item__title">
                {item.title}
            </a>
        </h3>

        <div className="catalog-result-item__creator">{creatorName(item)}</div>

        <div className="catalog-result-item__publisher">
            {item.publisher} {item.date}
        </div>

        <div className="catalog-result-item__type">{item.type}</div>

        <PhysicalAvailability item={item}/>

        {item.getit && getItLink(item)}

        {item.covers.length > 1 && coverImage(item)}
    </div>
}

function creatorName(item) {
    if (item.creator) {
        return item.creator;
    }

    if (item.contributors[0]) {
        return item.contributors[0];
    }

    return '';
}

function getItLink(item) {
    return <div className="catalog-result-item__getit"><a href={item.link}>Find online</a></div>;
}

function coverImage(item) {
    return <div className="media-right">
        <img src={item.covers[0]} alt="book cover" className="cover-image"/>
    </div>
}


export default BookResult;