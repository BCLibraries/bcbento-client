import React, {useState} from 'react';
import SearchBox from './SearchBox';

// Minimum length of input string before typeahead is activated.
const minTypeaheadLength = 3;

// Id of the search box <input> element.
const searchBoxId = 'bento-search-box__search-input';

// Called when a suggestion in the typeahead box is selected. Redirects page to
// new search with the selected value as keyword.
function onSuggestionSelected(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
    const url = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.location.href = `${url}?any=${suggestionValue}`;
}

function SearchBoxContainer({handleTyping, searchString, onSubmit}) {

    // suggestions is an array of suggestions, each with the format:
    //     {
    //         value: 'Text of suggestion',
    //         score: 15
    //     }
    // Where value is the text of the suggestion and score is the score
    // assigned by ElasticSearch
    const [suggestions, setSuggestions] = useState([]);

    // value is the text value of the search box <input> element.
    const [value, setValue] = useState(searchString);

    // Called after each keypress in the typeahead box.
    const onTyping = (event, {newValue, method}) => {
        if (method === 'enter') {
            onSubmit();
        } else {
            setValue(newValue);
            handleTyping(newValue);
        }
    };

    // Called to fetch suggestions from server.
    async function fetchSuggestions({value, reason}) {

        // Don't fetch suggestions if there isn't enough input or if the input action was not
        // actually typing.
        if (value.length < minTypeaheadLength || reason === 'input-focused') {
            return;
        }

        // Fetch.
        const url = `https://library.bc.edu/search-services/typeahead?any=${value}`;
        let json = [];

        try {
            const response = await fetch(url);
            json = await response.json();
        } catch (err) {

            // Don't fail on error, just don't return a suggestions.
            json = []
        }
        setSuggestions(json);
    }

    // Called to empty suggestions (e.g. after pressing escape).
    function clearSuggestions() {
        setSuggestions([]);
    }

    // Search box should be auto-focused iff there are no results to display.
    const autoFocus = !value;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'Search for books, articles, journals, databases',
        value,
        onChange: onTyping,
        name: 'any',
        id: searchBoxId,
        autoFocus
    };

    const props = {
        searchBoxId,
        suggestions,
        fetchSuggestions,
        clearSuggestions,
        onSuggestionSelected,
        inputProps
    };

    return <SearchBox {...props} />
}

export default SearchBoxContainer;