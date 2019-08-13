import React from 'react';
import OnlineVideo from './OnlineVideo';
import PhysicalVideo from './PhysicalVideo';

function VideoResult({item}) {
    const video = item.isElectronic ? <OnlineVideo video={item}/> : <PhysicalVideo video={item} />;

    return <li className="catalog-result-item media">
        {video}
    </li>
}

export default VideoResult;