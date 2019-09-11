import React from 'react';
import BestBetResult from "./BestBetResult";
import GraphQLQueries from "../../GraphQLQueries";
import {useQuery} from "@apollo/react-hooks";

function BestBetLookup({searchString, client}) {
    const {loading, error, data} = useQuery(GraphQLQueries.forBestBets(searchString), {client});

    if (loading || error || !data.bestBet) {
        return null;
    }

    return <BestBetResult bestBet={data.bestBet}/>;
}

export default BestBetLookup;