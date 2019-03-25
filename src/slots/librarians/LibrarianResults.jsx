import React from 'react';
import useFetchResultList from '../UseFetchResultList';

function LibrarianResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/librarians');

    const items = loading ? <span>Loading</span> : data.items.map((item) => <li key={item.id}>{item.name}</li>);

    return <div>
        <h2>Librarian results for {searchString}</h2>
        <ul>
            {items}
        </ul>
    </div>;
}

export default LibrarianResults;