import React from 'react';
import VideoResult from "../video/VideoResult";
import {PrimoRecordLink} from "../PrimoRecordLink";
import AvailabilityContainer from "../availability/AvailabilityContainer";
import HathiTrustLink from "./HathiTrustLink";
import FindingAidLink from "./FindingAidLink";
import FindingAidIcon from "./icon_archives.svg";
import CoverImage from "../CoverImage";
import GetItLink from "../GetItLink";
import {getDisplayCreator} from "../getDisplayCreator";
import {lookupTypeName} from "../../ResourceTypeMap";

/**
 * Result for single item in "Books & more" search
 *
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
function BookResult({item}) {
    if (item.isElectronic && item.type === 'Video') {
        return <VideoResult item={item} inCatalogResult={true}/>;
    }

    const resource_type = lookupTypeName(item.type);

    const link = PrimoRecordLink(item);

    return <li className="catalog-result-item media">

        <div className="media-body">
            <div className="catalog-result-item__type">{resource_type}</div>
            <h3 className="catalog-result-item__media-heading media-heading">
                <a href={link} className="catalog-result-item__title">
                    {item.title}
                </a>
            </h3>

            <div className="catalog-result-item__creator">{getDisplayCreator(item)}</div>

            <div className="catalog-result-item__publisher">
                {item.publisher} {item.date}
            </div>

            {item.isElectronic && <GetItLink url={link}/>}

            {item.isPhysical && <AvailabilityContainer item={item}/>}

            {item.hathitrustUrl && <HathiTrustLink url={item.hathitrustUrl}/>}

            {hasFindingAid(item) && <FindingAidLink url={item.linkToFindingAid.url}/>}

        </div>

        {getThumbnail(item, link)}

    </li>
}

/**
 * Determine what thumbnail to use
 *
 * @param item
 * @return {null|*}
 */
function getThumbnail(item, link) {

    // Is there a cover image? Use that.
    if (item.coverImages.length > 1) {
        return <CoverImage imageUrl={item.coverImages[0].url} itemUrl={link}/>;
    }

    // If it's a finding aid, use the finding aid icon.
    if (hasFindingAid(item, link)) {
        return <CoverImage imageUrl={FindingAidIcon} itemUrl={link} specialClass={"finding-aid-thumb"}/>;
    }

    // Otherwise nothing.
    return null;
}

/**
 * Is this thing a finding aid?
 *
 * @param item
 * @return {boolean}
 */
function hasFindingAid(item) {
    return Boolean(item.linkToFindingAid && item.linkToFindingAid.url);
}

export default BookResult;
