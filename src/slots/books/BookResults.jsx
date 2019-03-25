import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import BookResult from "./BookResult";

function BookResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');
    const body = loading ? <div className='loading-notice'>Loading</div> : booksList(data.items);

    return <div className="catalog-results-box">
        <h2 className="catalog-results-box__header">Books & more</h2>
        {body}
    </div>;
}

function booksList(books) {
    if (books.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <ol className="catalog-results-list">
        {books.map((book) => <BookResult key={book.id} item={book}/>)}
    </ol>;
}

export default BookResults;