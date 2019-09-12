import React from 'react';
import FaqResult from "./FaqResult";
import NewResultsBox from "../NewResultsBox";
import {FAQQuery} from "./FAQQuery";

/**
 * FAQ results box
 *
 * @param searchString string The search string from user input
 * @param client object GraphQL client
 * @return {*}
 * @constructor
 */
function FaqResults({searchString, client}) {
    return (
        <NewResultsBox
            client={client}
            heading={'FAQ'}
            classPrefix={'faq'}
            term={'results'}
            query={new FAQQuery(searchString)}
            renderResult={doc => <FaqResult result={doc} key={`answer-${doc.id}`}/>}
        />
    );
}

export default FaqResults;