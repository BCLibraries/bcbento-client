import React from 'react';
import useFetchResultList from '../UseFetchResultList';
import LibrarianResult from "./LibrarianResult";

function LibrarianResults({searchString, numResults}) {
    const {data, loading} = useFetchResultList(searchString, 'http://libdev.bc.edu/search-services/librarians');
    const body = loading ? <div className='loading-notice'>Loading</div> : librarianList(data.items);

    return <div className="librarian-results-box">
        <h2 className="librarian-results-box__header">Librarians</h2>
        {body}
    </div>;
}

function librarianList(librarians) {
    if (librarians.length === 0) {
        return <div className="no-results-found">
            <a href="http://libguides.bc.edu/ask-a-librarian/contact">See all subject librarians</a>.
        </div>
    }

    return <ol className="librarian-results-list">
        {librarians.map((librarian) => <LibrarianResult key={librarian.id} librarian={librarian}/>)}
    </ol>;
}

export default LibrarianResults;