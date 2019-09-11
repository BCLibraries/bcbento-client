import React from 'react';
import VideoResult from "./VideoResult";
import NewResultsBox from "../NewResultsBox";
import SeeAllLink from "../SeeAllLink";
import primoSearchUrl from "../../PrimoSearchURL";
import GraphQLQueries from "../../GraphQLQueries";
import {useQuery} from "@apollo/react-hooks";

const resultsBoxOptions = {
    heading: 'Videos',
    classPrefix: 'videos'
};

function VideoResults({searchString, client}) {
    const searchURL = primoSearchUrl(searchString, 'video', 'VIDEO');
    const {loading, error, data} = useQuery(GraphQLQueries.forVideos(searchString), {client});

    if (loading) {
        return (
            <NewResultsBox status="loading" {...resultsBoxOptions}/>
        );
    }

    if (error) {
        return <NewResultsBox status="error" {...resultsBoxOptions} />
    }

    if (data.searchVideo.total === 0) {
        return <NewResultsBox noResultsMessage='There are no results matching your search.' {...resultsBoxOptions} />
    }

    const results = data.searchVideo.docs.map(doc => <VideoResult item={doc} key={`video-${doc.id}`}/>);

    const seeAllLink = (
        <SeeAllLink
            term={"items"}
            total={data.searchVideo.total}
            found={data.searchVideo.docs.length}
            url={searchURL}
        />
    );

    return (
        <NewResultsBox
            results={results}
            status={'success'}
            searchUrl={searchURL}
            seeAll={seeAllLink}
            {...resultsBoxOptions}
        />
    );
}

export default VideoResults;