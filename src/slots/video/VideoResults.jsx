import React from 'react';
import useFetchResultList from '../UseFetchResultList';

function VideoResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/video');

    const items = loading ? <span>Loading</span> : data.items.map((item) => <li key={item.id}>{item.title}</li>);

    return <div>
        <h2>Video results for {searchString}</h2>
        <ul>
            {items}
        </ul>
    </div>;
}

export default VideoResults;