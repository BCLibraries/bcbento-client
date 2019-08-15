import React from 'react';
import defaultVHSIcon from './video-tape.svg';
import defaultDVDIcon from './mono-dvd-mount.svg';
import PhysicalAvailability from "../PhysicalAvailability";
import FixBrokenImage from "../../FixBrokenImage";

function PhysicalVideo({video}) {
    const cover = getCover(video);

    return <div className="physical-video">
        <a href={recordLink(video)} aria-hidden="true">
            <img src={cover} onLoad={onImageLoad} onError={FixBrokenImage('https://library.bc.edu/images/video-tape.svg')} alt="" className={coverClass(video)}/>
        </a>

        <h3 className="physical-video__media-heading media-heading">
            <a href={video.link} className="physical-video__title">
                {video.title}
            </a>
        </h3>

        {video.date}

        <div className="physical-video__creator">{creatorName(video)}</div>

        {video.format}

        <PhysicalAvailability item={video}/>

    </div>
}

function coverClass(video) {
    return (video.coverImages.length > 0 && video.coverImages[0])  ? 'physical-video__box_cover' : 'physical-video__default_cover';
}

function getCover(video) {
    if (video.coverImages.length > 0 && video.coverImages[0]) {
        return String(video.coverImages[0].url);
    }

    switch (video.format) {
        case 'DVD':
            return defaultDVDIcon;
        case 'VHS':
            return defaultVHSIcon;
        default:
            return defaultVHSIcon;
    }
}

function creatorName(video) {
    if (video.creator) {
        return video.creator;
    }

    if (video.contributors[0]) {
        return video.contributors[0];
    }

    return '';
}

function recordLink(item) {
    return `https://bc-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=${item.id}&context=L&tab=bcl_only&search_scope=bcl&vid=bclib_new&lang=en_US`;
}

function onImageLoad(event) {
    console.log(event.target.offsetHeight);
    if (event.target.offsetHeight === 1) {
        event.target.src = 'https://library.bc.edu/images/video-tape.svg';
    }
}

export default PhysicalVideo;