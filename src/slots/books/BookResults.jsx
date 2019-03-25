import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import BookResult from "./BookResult";

function BookResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');
    const loadingNotice = loading ? <div className='loading-notice'>Loading</div> : <span/>;
    const loadingClass = loading ? 'catalog-results-list--loading' : '';

    return <div className="catalog-results-box">
        <h2>Catalog results</h2>
        {loadingNotice}
        <ul className={["catalog-results-list", loadingClass]}>
            {data.items.map((item) => <BookResult key={`book-result-${item.id}`} item={item}/>)}
        </ul>
    </div>;
}

export default BookResults;