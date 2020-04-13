import React from 'react';
import VideoResult from "../video/VideoResult";
import {PrimoRecordLink} from "../PrimoRecordLink";
import AvailabilityContainer from "../availability/AvailabilityContainer";
import HathiTrustLink from "./HathiTrustLink";

function BookResult({item}) {
    if (item.isElectronic && item.type === 'Video') {
        return <VideoResult item={item} inCatalogResult={true}/>;
    }

    const link = PrimoRecordLink(item);

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

            {item.isElectronic && getItLink(item)}

            {item.isPhysical && physicalAvailability(item)}

            {item.hathitrustUrl && <HathiTrustLink url={item.hathitrustUrl}/> }

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
    return <div className="catalog-result-item__getit"><a href={PrimoRecordLink(item)}>Find online</a></div>;
}

function physicalAvailability(item) {
    return <AvailabilityContainer item={item} />;
}

function coverImage(item) {
    const altText = `Catalog record for ${item.title}`;
    return <div className="media-right">
        <a href={PrimoRecordLink(item)} aria-hidden="true">
            <img src={item.coverImages[0].url} alt={altText} className="cover-image"/>
        </a>
    </div>
}

export default BookResult;