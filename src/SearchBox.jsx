import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';

const minTypeaheadLength = 3;
const getSuggestionValue = suggestion => suggestion.value;

const searchBoxId = 'bento-search-box__search-input';

function onSuggestionSelected(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
    const url = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.location.href = `${url}?any=${suggestionValue}`;
}

const renderSuggestion = suggestion => (
    <div className="search-suggestion">
        {suggestion.value}
    </div>
);

function SearchBox({handleTyping, searchString, onSubmit}) {
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState(searchString);


    const onTyping = (event, {newValue, method}) => {
        if (method === 'enter') {
            onSubmit();
        } else {
            setValue(newValue);
            handleTyping(newValue);
        }
    };

    async function fetchSuggestions({value, reason}) {
        const url = `https://library.bc.edu/search-services/typeahead?any=${value}`;

        let json = [];

        if (value.length < minTypeaheadLength) {
            return;
        }

        if (reason === 'input-focused') {
            return;
        }

        try {
            const response = await fetch(url);
            json = await response.json();
        } catch (err) {
            json = []
        }
        setSuggestions(json);
    }

    function clearSuggestions() {
        setSuggestions([]);
    }

    // Search box should be auto-focused iff there is no results to display.
    const autofocus = !value;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'Search for books, articles, journals, databases',
        value,
        onChange: onTyping,
        name: 'any',
        id: searchBoxId,
        autoFocus: autofocus
    };

    return <form method="get" action="." className="bento-search-box">

        <label htmlFor={searchBoxId} className="bcbento-search-box__input-label sr-only">
            Enter a search term
        </label>
        <Autosuggest suggestions={suggestions}
                     onSuggestionsFetchRequested={fetchSuggestions}
                     onSuggestionsClearRequested={clearSuggestions}
                     getSuggestionValue={getSuggestionValue}
                     renderSuggestion={renderSuggestion}
                     onSuggestionSelected={onSuggestionSelected}
                     inputProps={inputProps}

        />
    </form>
}

export default SearchBox;