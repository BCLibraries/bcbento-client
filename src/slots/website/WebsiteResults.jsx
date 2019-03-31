import React from 'react';
import WebsiteResult from "./WebsiteResult";
import ResultBox from "../ResultBox";

const renderHitList = data => {
    return (
        <React.Fragment>
            {data.items.map((hit) => <WebsiteResult key={hit.url} hit={hit}/>)}
        </React.Fragment>
    );
};

function WebsiteResults({searchString}) {
    return <ResultBox baseUrl={process.env.REACT_APP_WEBSITE_SERVICE_URL}
                      classPrefix="website"
                      term="results"
                      heading="Our Website"
                      searchString={searchString}
                      render={renderHitList}
    />;
}

export default WebsiteResults;