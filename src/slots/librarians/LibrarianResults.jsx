import React from 'react';
import LibrarianResult from "./LibrarianResult";
import ResultsBoxContainer from "../ResultsBoxContainer";
import {LibrariansQuery} from "./LibrariansQuery";

function LibrarianResults({searchString, client}) {
    return (
        <ResultsBoxContainer
            client={client}
            heading={'Librarians'}
            classPrefix={'librarian'}
            term={'librarians'}
            query={new LibrariansQuery(searchString)}
            renderResult={doc => <LibrarianResult librarian={doc} key={`librarian-${doc.id}`}/>}
        />
    );
}

export default LibrarianResults;