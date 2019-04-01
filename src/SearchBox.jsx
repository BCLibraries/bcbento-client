import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest';

const minTypeaheadLength = 3;
const getSuggestionValue = suggestion => suggestion.value;

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
        const url = `http://libdev.bc.edu/search-services/typeahead?any=${value}`;

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

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'Search for books, articles, journals, databases',
        value,
        onChange: onTyping,
        name: 'any'
    };

    return <form method="get" action="." className="bento-search-box">
        <label for="bento-search-box__search-input" className="bcbento-search-box__input-label sr-only">Search</label>
        <Autosuggest suggestions={suggestions}
                     onSuggestionsFetchRequested={fetchSuggestions}
                     onSuggestionsClearRequested={clearSuggestions}
                     getSuggestionValue={getSuggestionValue}
                     renderSuggestion={renderSuggestion}
                     inputProps={inputProps}
                     id='bento-search-box__search-input'

        />
    </form>
}

export default SearchBox;