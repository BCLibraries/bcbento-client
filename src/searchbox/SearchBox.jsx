import React from 'react';
import Autosuggest from "react-autosuggest";

/**
 * Render the search box and the  list of typeahead suggestions
 *
 * @param searchBoxId
 * @param suggestions
 * @param fetchSuggestions
 * @param clearSuggestions
 * @param onSuggestionSelected
 * @param inputProps
 * @return {*}
 * @constructor
 */
function SearchBox({searchBoxId, suggestions, fetchSuggestions, clearSuggestions, onSuggestionSelected, inputProps}) {

    // A display a single suggestion.
    const renderSuggestion = suggestion => (
        <div className="search-suggestion">
            {suggestion.value}
        </div>
    );

    return (
        <form method="get" action="/search" className="bento-search-box">

            <label htmlFor={searchBoxId} className="bcbento-search-box__input-label sr-only">
                Enter a search term please
            </label>
            <Autosuggest suggestions={suggestions}
                         getSuggestionValue={suggestion => suggestion.value}
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