import React from 'react';

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
        <div className="bcbento-search-box">
            <label htmlFor={searchBoxId} className="bcbento-search-box__input-label sr-only">
                Enter a search term please
            </label>
        </div>
    );
}

export default SearchBox;
