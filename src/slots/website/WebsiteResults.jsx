import React from 'react';
import WebsiteResult from "./WebsiteResult";
import ResultsBoxContainer from "../ResultsBoxContainer";
import {WebsiteQuery} from "./WebsiteQuery";

function WebsiteResults({searchString, client}) {
    return (
        <ResultsBoxContainer
            client={client}
            heading={'Our Website'}
            classPrefix={'website'}
            term={'results'}
            query={new WebsiteQuery(searchString)}
            renderResult={doc => <WebsiteResult hit={doc} key={`hit-${doc.url}`}/>}
        />
    );
}

export default WebsiteResults;