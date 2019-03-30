import {useEffect, useState} from 'react';

function useFetchResultList(searchString, baseUrl) {
    const [data, setData] = useState({error: false, items: [], total_results: 0});
    const [loading, setLoading] = useState(false);

    async function fetchData(url) {
        let json = {};

        if (searchString === '') {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(url);
            json = await response.json();
        } catch (err) {
            json = {error: true, items: []}
        }
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