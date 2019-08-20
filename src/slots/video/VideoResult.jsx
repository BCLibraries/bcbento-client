import React from 'react';
import OnlineVideo from './OnlineVideo';
import PhysicalVideo from './PhysicalVideo';

function VideoResult({item, inCatalogResult}) {
    const video = item.isElectronic ? <OnlineVideo video={item}/> : <PhysicalVideo video={item}/>;
    const resultClass = inCatalogResult ? 'catalog-result-item' : 'catalog-result-item col-md-4';

    return <li className={resultClass}>
        {video}
    </li>
}

export default VideoResult;