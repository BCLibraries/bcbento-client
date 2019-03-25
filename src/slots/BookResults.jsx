import React from 'react';
import useFetchResultList from './UseFetchResultList';

function BookResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');

    const items = loading ? <span>Loading</span> : data.items.map((item) => <li key={item.id}>{item.title}</li>);

    return <div>
        <h2>Book results for {searchString}</h2>
        <ul>
            {items}
        </ul>
    </div>;
}

export default BookResults;