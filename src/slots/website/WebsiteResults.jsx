import React from 'react';
import useFetchResultList from '../UseFetchResultList';

function WebsiteResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/website');

    const items = loading ? <span>Loading</span> : data.items.map((item) => <li key={item.id}>{item.title}</li>);

    return <div>
        <h2>Website results for {searchString}</h2>
        <ul>
            {items}
        </ul>
    </div>;
}

export default WebsiteResults;