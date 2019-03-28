import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import BookResult from "./BookResult";
import BentoResultError from "../BentoResultError";
import LoadingNotice from "../articles/ArticleResults";
import SeeAllLink from "../SeeAllLink";

function BookResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://localhost:8080/search-services/catalog');
    const body = loading ? <LoadingNotice/> : booksList(data.items, data.total_results, data.search_url);

    return <div className="catalog-results-box">
        <h2 className="catalog-results-box__header">Books & more</h2>
        <SeeAllLink url={data.search_url} total={data.total_results} found={data.items.length}/>
        {data.error ? <BentoResultError message="There was an error searching the catalog."/> : body}
    </div>;
}

function booksList(books, total_results, url) {
    if (books.length === 0) {
        return <div className="no-results-found">
            There are no results matching your search.
        </div>
    }

    return <div>
        <ol className="catalog-results-list">
            {books.map((book) => <BookResult key={book.id} item={book}/>)}
        </ol>
        <SeeAllLink total={total_results} found={books.length} term='books' url={url}/>
    </div>;
}

export default BookResults;