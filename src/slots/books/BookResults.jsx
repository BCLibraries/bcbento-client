import React from 'react';
import BookResult from "./BookResult";
import ResultBox from "../ResultBox";

const renderBookList = data => {
    return (
        <React.Fragment>
            {data.items.map(book => <BookResult key={book.id} item={book}/>)}
        </React.Fragment>
    );
};

function BookResults({searchString}) {
    return <ResultBox baseUrl='http://libdev.bc.edu/search-services/catalog'
                      classPrefix="catalog"
                      term="results"
                      heading="Books & more"
                      searchString={searchString}
                      render={renderBookList}
    />;
}

export default BookResults;