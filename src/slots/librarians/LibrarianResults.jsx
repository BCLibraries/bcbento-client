import React from 'react';
import LibrarianResult from "./LibrarianResult";
import ResultBox from "../ResultBox";

const noResultsMessage = (
    <div className="no-results-found">
        <a href="http://libguides.bc.edu/ask-a-librarian/contact">See all subject librarians</a>.
    </div>
);

const renderLibrarianList = data => {
    return (
        <React.Fragment>
            {data.items.map(librarian => <LibrarianResult key={librarian.id} librarian={librarian}/>)}
        </React.Fragment>
    );
};

function LibrarianResults({searchString}) {
    return <ResultBox baseUrl={process.env.REACT_APP_LIBRARIANS_SERVICE_URL}
                      classPrefix="librarian"
                      term="librarians"
                      heading="Librarians"
                      noResultsMessage={noResultsMessage}
                      searchString={searchString}
                      render={renderLibrarianList}
    />;
}

export default LibrarianResults;