import React from 'react';
import BookResult from "./BookResult";
import ResultsBoxContainer from "../ResultsBoxContainer";
import {BooksAndMoreQuery} from "./BooksAndMoreQuery";

/**
 * Book results box
 *
 * @param searchString string The search string from user input
 * @param client object GraphQL client
 * @return {*}
 * @constructor
 */
function BookResults({searchString, client}) {
    return (
        <ResultsBoxContainer
            client={client}
            heading={'Books & more'}
            classPrefix={'books'}
            term={'items'}
            query={new BooksAndMoreQuery(searchString)}
            renderResult={doc => <BookResult item={doc} key={`book-${doc.id}`}/>}
        />
    );
}

export default BookResults;