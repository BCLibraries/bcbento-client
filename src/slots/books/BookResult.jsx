import React from 'react';
import PhysicalAvailability from "../PhysicalAvailability";

function BookResult({item}) {
    const link = recordLink(item);

    return <li className="catalog-result-item media">

        <div className="media-body">
            <h3 className="catalog-result-item__media-heading media-heading">
                <a href={link} className="catalog-result-item__title">
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

            <a href={link} aria-hidden="true" className={"media-body__mobile-link"}>&nbsp;</a>

        </div>

        {item.coverImages.length > 1 && coverImage(item)}
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
            <img src={item.coverImages[0]} alt="" className="cover-image"/>
        </a>
    </div>
}

function recordLink(item) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${item.id}&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US`;
}


export default BookResult;