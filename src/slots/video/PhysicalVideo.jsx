import React from 'react';
import defaultVHSIcon from './video-tape.svg';
import defaultDVDIcon from './mono-dvd-mount.svg';
import defaultGenericIcon from './blank-screen.svg';
import PhysicalAvailability from "../books/PhysicalAvailability";

function PhysicalVideo({video}) {
    const cover = getCover(video);

    return <div className="physical-video">
        <a href={video.link}>
            <img src={cover} alt="video cover" className={coverClass(video)}/>
        </a>

        <h3 className="media-heading">
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
    return (video.covers.length > 0) ? 'physical-video__box_cover' : 'physical-video__default_cover';
}

function getCover(video) {
    if (video.covers.length > 0) {
        return video.covers[0];
    }

    switch (video.format) {
        case 'DVD':
            return defaultDVDIcon;
        case 'VHS':
            return defaultVHSIcon;
        default:
            return defaultGenericIcon;
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

export default PhysicalVideo;