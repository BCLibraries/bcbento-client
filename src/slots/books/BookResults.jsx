import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import BookResult from "./BookResult";

function BookResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');
    const loadingNotice = loading ? <div className='loading-notice'>Loading</div> : <span/>;
    const loadingClass = loading ? 'catalog-results-list--loading' : '';
    const listClasses = `catalog-results-list ${loadingClass}`;

    return <div className="catalog-results-box">
        <h2 className="catalog-results-box__header">Books & more</h2>
        {loadingNotice}
        <ol className={listClasses}>
            {data.items.map((item) => <BookResult key={item.id} item={item}/>)}
        </ol>
    </div>;
}

export default BookResults;