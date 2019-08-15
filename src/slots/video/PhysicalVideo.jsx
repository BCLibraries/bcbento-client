import React from 'react';
import PhysicalAvailability from "../PhysicalAvailability";
import FixBrokenImage from "../../FixBrokenImage";

const defaultVHSIcon = 'https://library.bc.edu/images/video-tape.svg';
const defaultDVDIcon = 'https://library.bc.edu/images/mono-dvd-mount.svg';

const vhsClass = 'physical-video__vhs-cover',
    dvdClass = 'physical-video__dvd-cover';

let defaultIcon = defaultVHSIcon;
let iconClass = vhsClass;

function PhysicalVideo({video}) {
    if (video.format.includes('disc')) {
        defaultIcon = defaultDVDIcon;
        iconClass = dvdClass;
    }

    const cover = getCover(video);

    return <div className="physical-video">
        <a href={recordLink(video)} aria-hidden="true">
            <img src={cover} onLoad={onImageLoad} onError={FixBrokenImage(defaultIcon, `physical-video__default_cover ${iconClass}`)} alt="" className={coverClass(video)}/>
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
    return (video.coverImages.length > 0 && video.coverImages[0]) ? 'physical-video__box_cover' : `physical-video__default_cover  ${iconClass}`;
}

function getCover(video) {
    if (video.coverImages.length > 0 && video.coverImages[0]) {
        return String(video.coverImages[0].url);
    }

    return defaultIcon;
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
    event.target.className = `physical-video__default_cover ${iconClass}`;
    if (event.target.naturalHeight === 1) {
        event.target.src = defaultIcon;
    }
}

export default PhysicalVideo;