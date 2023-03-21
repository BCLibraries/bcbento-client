import React from 'react';
import Autosuggest from "react-autosuggest";

/**
 *
 * @param {string} searchBoxId ID element for the search box
 * @param {function} onTyping Called when a character is entered
 * @param {string} value The search string
 * @param {function} setHasFocus Pass focus status up
 * @return {*}
 * @constructor
 */
function SmallSearchBox({searchBoxId, onTyping, value, setHasFocus}) {
    function handleChange(event) {
        onTyping(event, {newValue: event.target.value, method: 'nomethod'});
    }

    function onFocus(event) {
        event.target.selectionStart = value.length;
        setHasFocus(true);
    }

    function onBlur(event) {
        setHasFocus(false);
    }

    return (
        <div className="bcbento-search-box">
            <label htmlFor={searchBoxId} className="bcbento-search-box__input-label sr-only">
                Enter a search term please
            </label>
            <input
                className={"react-autosuggest__input"}
                type={"text"}
                id={searchBoxId}
                value={value}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                name="any"
                autoFocus
            />
        </div>
    );
}

export default SmallSearchBox;
