import {useCallback, useState} from 'react';

function useQueryString(key, initialValue) {
    const [value, setValue] = useState(getQueryStringValue(key) || initialValue);

    const onSetValue = useCallback(
        newValue => {
            setValue(newValue);
            if (newValue === 'true') {
                setQueryStringValue(key, newValue);
            } else {
                deleteQueryStringValue(key);
            }
        },
        [key]
    );

    return [value, onSetValue];
}

/**
 * Get a query string value
 *
 * @param key
 * @return {string}
 */
function getQueryStringValue(key) {
    const queryStringHash = parseQueryString();

    if (queryStringHash.keys.indexOf(key) === -1) {
        return 'false';
    }

    return decodeURIComponent(queryStringHash.parameters[key]);
}

/**
 * Set a value on the query string and push to history
 *
 * @param key
 * @param value
 */
function setQueryStringValue(key, value) {

    const queryHash = parseQueryString();
    queryHash.parameters[key] = encodeURIComponent(value);

    // If the key isn't present, add it?
    if (queryHash.keys.indexOf(key) === -1) {
        queryHash.keys.push(key);
    }
    replaceState(queryHash);
}

/**
 * Set a value on the query string and push to history
 *
 * @param key
 * @param value
 */
function deleteQueryStringValue(key) {

    const queryHash = parseQueryString();

    const index = queryHash.keys.indexOf(key);

    // Delete from the key hash.
    if (index > -1) {
        queryHash.keys.splice(index, 1);
        delete queryHash.parameters['key'];
    }

    replaceState(queryHash);
}


/**
 * Get an object representing the query string
 *
 * @return {{keys: [], parameters: {}}}
 */
function parseQueryString() {

    // Store parameters in a hash for retrieval. Store keys in an array
    // to maintain ordering.
    let queryHash = {
        parameters: {},
        keys: []
    };


    const queryStringItems = window.location.search.split('&');
    for (let i = 0; i < queryStringItems.length; i++) {
        const [key, val] = queryStringItems[i].split('=');
        queryHash.parameters[key] = val;
        queryHash.keys.push(key);
    }

    return queryHash;
}

function replaceState(queryHash) {
    const queryStringParts = [];
    for (let i = 0; i < queryHash.keys.length; i++) {
        const currentKey = queryHash.keys[i];
        queryStringParts.push(currentKey + '=' + queryHash.parameters[currentKey]);
    }

    const newURL = window.location.protocol + "//" +
        window.location.host +
        window.location.pathname +
        queryStringParts.join('&');
    window.history.replaceState({path: newURL}, '', newURL);
}

export default useQueryString;