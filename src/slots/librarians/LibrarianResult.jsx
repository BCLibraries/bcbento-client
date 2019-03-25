import React from 'react';

function LibrarianResult({librarian}) {
    const url = `http://libguides.bc.edu/prf.php?account_id=${librarian.id}`;
    const img_url = `//${librarian.image}`;
    const alt = `picture of ${librarian.name}`;

    return <div className="media">
        <div className="media-left">
            <a href={url}><img src={img_url} alt={alt}/></a>
        </div>

        <div className="media-body">
            <h4 className="media-heading">
                <a href={url}>{librarian.name}</a>
            </h4>
            <p className="guide-description">{librarian.display_subjects}</p>
        </div>
    </div>;
}

export default LibrarianResult;