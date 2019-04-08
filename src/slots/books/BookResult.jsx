import React from 'react';
import PhysicalAvailability from "./PhysicalAvailability";

function BookResult({item}) {
    return <li className="catalog-result-item media">

        <div className="media-body">
            <h3 className="catalog-result-item__media-heading media-heading">
                <a href={item.link} className="catalog-result-item__title">
                    {item.title}
                </a>
            </h3>

            <div className="catalog-result-item__creator">{creatorName(item)}</div>

            <div className="catalog-result-item__publisher">
                {item.publisher} {item.date}
            </div>

            <div className="catalog-result-item__type">{item.type}</div>

            {item.getit && getItLink(item)}

            <PhysicalAvailability item={item}/>

            <a href={item.link} aria-hidden="true" className={"media-body__mobile-link"}>&nbsp;</a>

        </div>

        {item.covers.length > 1 && coverImage(item)}
    </li>
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
        <a href={item.link} aria-hidden="true">
            <img src={item.covers[0]} alt="" className="cover-image"/>
        </a>
    </div>
}


export default BookResult;