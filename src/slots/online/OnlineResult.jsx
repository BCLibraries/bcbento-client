import React from 'react';
import VideoResult from "../video/VideoResult";
import {PrimoRecordLink} from "../PrimoRecordLink";
import HathiTrustLink from "../books/HathiTrustLink";
import AvailabilityContainer from "../availability/AvailabilityContainer";
import CoverImage from "../CoverImage";
import GetItLink from "../GetItLink";
import {getDisplayCreator} from "../getDisplayCreator";

function OnlineResult({item}) {
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

            <div className="catalog-result-item__creator">{getDisplayCreator(item)}</div>

            <div className="catalog-result-item__publisher">
                {item.publisher} {item.date}
            </div>

            <div className="catalog-result-item__type">{item.type}</div>

            {item.isElectronic && <GetItLink url={link}/>}

            {item.isPhysical && <AvailabilityContainer item={item}/>}

            {item.hathitrustUrl && <HathiTrustLink url={item.hathitrustUrl}/>}

        </div>

        {item.coverImages.length > 1 && <CoverImage itemUrl={link} imageUrl={item.coverImages[0].url}/>}
    </li>
}

export default OnlineResult;