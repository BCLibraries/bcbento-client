import React from 'react';

function FaqResult({result}) {
    return <li><a href={result.url}>{result.question}</a></li>;
}

export default FaqResult;