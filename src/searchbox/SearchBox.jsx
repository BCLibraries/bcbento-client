import React from 'react';
import Autosuggest from "react-autosuggest";

function SearchBox({searchBoxId, suggestions, fetchSuggestions, clearSuggestions, onSuggestionSelected, inputProps}) {
    const renderSuggestion = suggestion => (
        <div className="search-suggestion">
            {suggestion.value}
        </div>
    );

    return (
        <form method="get" action=".." className="bento-search-box">

            <label htmlFor={searchBoxId} className="bcbento-search-box__input-label sr-only">
                Enter a search term please
            </label>
            <Autosuggest suggestions={suggestions}
                         onSuggestionsFetchRequested={fetchSuggestions}
                         onSuggestionsClearRequested={clearSuggestions}
                         renderSuggestion={renderSuggestion}
                         onSuggestionSelected={onSuggestionSelected}
                         inputProps={inputProps}
            />
        </form>
    );
}

export default SearchBox;