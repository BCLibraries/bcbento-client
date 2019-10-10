import React from 'react';

function LargeSearchBox({searchBoxId, onTyping, value}) {
    function handleChange(event) {
        onTyping(event, {newValue: event.target.value, method: 'nomethod'});
    }

    function moveCursorToEnd(event) {
        event.target.selectionStart = value.length
    }

    return (
        <textarea
            id={searchBoxId}
            value={value}
            onChange={handleChange}
            onFocus={moveCursorToEnd}
            name="any"
            autoFocus
        />
    );
}

export default LargeSearchBox;