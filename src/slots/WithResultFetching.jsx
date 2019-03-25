import React from 'react';
import useFetchResultList from "./UseFetchResultList";


const WithResultFetching = (Box, baseUrl) =>
    ({searchString}) => {
        const {data, loading} = useFetchResultList(searchString, baseUrl);
        const items = loading ? <span>Loading</span> : data.items.map((item) => <li key={item.id}>{item.title}</li>);
        return <Box searchString={searchString} items={items}/>;
    };

export default WithResultFetching;