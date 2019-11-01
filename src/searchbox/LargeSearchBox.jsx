import React from 'react';

/**
 *
 * @param {string} searchBoxId ID element for the search box
 * @param {function} onTyping Called when a character is entered
 * @param {string} value The search string
 * @param {function} setHasFocus Pass focus status up
 * @return {*}
 * @constructor
 */
function LargeSearchBox({searchBoxId, onTyping, value, setHasFocus}) {
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
        <textarea
            id={searchBoxId}
            value={value}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            name="any"
            autoFocus
        />
    );
}

export default LargeSearchBox;