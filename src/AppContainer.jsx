import React, {useState} from 'react';
import App from "./App";
import SearchBoxContainer from './searchbox/SearchBoxContainer';
import 'airbnb-js-shims';

function AppContainer() {
    // On page load, grab search string from URL 'any' GET parameter.
    const initialSearchString = getUrlParameter('any');
    setPageTitle(initialSearchString);

    // searchString is the text to be searched for.
    const [searchString, setSearchString] = useState(initialSearchString);

    // inputText is the text currently in the search box.
    const [inputText, setInputText] = useState('');
    const handleTyping = value => setInputText(value);

    // Handle page submits without reloads. Currently all submits have reloads, but this
    // will eventually be enabled for efficiency.
    const handleSubmit = () => {
        setSearchString(inputText);
        setPageTitle(searchString);
    };

    const searchBox = <SearchBoxContainer searchString={searchString}
                                          handleTyping={handleTyping}
                                          handleSubmit={handleSubmit}/>;

    return <App searchBox={searchBox} searchString={searchString}/>;
}

function setPageTitle(searchString) {
    document.title = searchString ? `Search - ${searchString}` : 'Search';
}

/**
 * Return a GET parameter from a URL query string
 *
 * @param name
 * @return {string}
 */
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default AppContainer;