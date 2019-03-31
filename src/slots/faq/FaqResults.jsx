import React from 'react';
import FaqResult from "./FaqResult";
import ResultBox from "../ResultBox";

const maxResults = 3;

const renderQuestionList = data => {
    const questions = data.items.slice(0, maxResults);
    return (
        <React.Fragment>
            {questions.map((question) => <FaqResult key={question.id} result={question}/>)}
        </React.Fragment>
    );
};

function FaqResults({searchString}) {
    return <ResultBox baseUrl={process.env.REACT_APP_FAQ_SERVICE_URL}
                      classPrefix="faq"
                      term="questions"
                      heading="Frequently Asked Questions"
                      searchString={searchString}
                      render={renderQuestionList}
    />;
}

export default FaqResults;