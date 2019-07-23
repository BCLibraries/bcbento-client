import React from 'react';
import OnlineVideo from './OnlineVideo';
import PhysicalVideo from './PhysicalVideo';

function VideoResult({item}) {
    const link = recordLink(item);

    const video = item.isElectronic ? <OnlineVideo video={item}/> : <PhysicalVideo video={item} />;

    return <li className="catalog-result-item media">
        {video}
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


export default VideoResult;