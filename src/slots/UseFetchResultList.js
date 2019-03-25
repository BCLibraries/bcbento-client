import {useEffect, useState} from 'react';

function useFetchResultList(searchString, baseUrl) {
    const [data, setData] = useState({items: []});
    const [loading, setLoading] = useState(false);

    async function fetchData(url) {
        if (searchString === '') {
            return;
        }
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        const url = `${baseUrl}?any=${searchString}`;
        fetchData(url);
    }, [searchString]);
    return {data, loading};
}

export default useFetchResultList;