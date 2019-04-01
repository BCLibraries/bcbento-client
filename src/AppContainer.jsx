import React, {useState} from 'react';
import App from "./App";
import SearchBox from './SearchBox';

function AppContainer() {
    const initialSearchString = getUrlParameter('any');
    document.title = getPageTitle(initialSearchString);

    const [searchString, setSearchString] = useState(initialSearchString);
    const [inputValue, setInputValue] = useState('');

    const handleInput = value => setInputValue(value);
    const handleSubmit = () => {
        setSearchString(inputValue);
        document.title = getPageTitle(searchString);
    };

    const searchBox = <SearchBox searchString={searchString}
                                 handleTyping={handleInput}
                                 handleSubmit={handleSubmit}/>;

    return <App searchBox={searchBox} searchString={searchString}/>;
}

function getPageTitle(searchString) {
    return searchString ? `Search - ${searchString}` : 'Search';
}

function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default AppContainer;