import React from 'react';
import FindingAidIcon from './icon_archives.svg';

function FindingAidLink({url}) {
    return <div className="finding-aid-link">
        <img src={FindingAidIcon} className="finding-aid-link__icon" alt=""/>
        <a href={url} target="_blank" rel="noopener noreferrer">
            Finding aid
            <i className="fa fa-external-link" aria-hidden="true"/>
        </a>
    </div>

}

export default FindingAidLink;