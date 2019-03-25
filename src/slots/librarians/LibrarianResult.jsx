import React from 'react';

function LibrarianResult({librarian}) {
    const url = `http://libguides.bc.edu/prf.php?account_id=${librarian.id}`;
    const img_url = `//${librarian.image}`;
    const alt = `picture of ${librarian.name}`;
    const display_subjects = librarian.subjects.sort().join(', ');


    return <li className="media">
        <div className="media-left">
            <a href={url}><img src={img_url} alt={alt}/></a>
        </div>

        <div className="media-body">
            <h4 className="media-heading">
                <a href={url}>{librarian.name}</a>
            </h4>
            <p className="guide-description">{display_subjects}</p>
        </div>
    </li>;
}

export default LibrarianResult;