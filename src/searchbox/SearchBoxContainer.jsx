import React, {useState} from 'react';
import SearchBox from './SearchBox';
import LargeSearchBox from "./LargeSearchBox";
import SmallSearchBox from "./SmallSearchBox";
import {CSSTransition} from "react-transition-group";

// How big should a text input be before enlarging the search box?
const minLargeSearchBoxLength = 50;

// Id of the search box <input> element.
const searchBoxId = 'bento-search-box__search-input';

// Called when a suggestion in the typeahead box is selected. Redirects page to
// new search with the selected value as keyword.
function onSuggestionSelected(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) {
    if (suggestionValue) {
        const url = window.location.protocol + '//' + window.location.host + window.location.pathname.replace(/\/$/, "");
        window.location.href = `${url}?any=${suggestionValue}`;
    }
}

/**
 * Controls search box and typeahead
 *
 * @param handleTyping
 * @param searchString
 * @param onSubmit
 * @return {*}
 * @constructor
 */
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

    // Does the searchbox have user focus?
    const [hasFocus, setHasFocus] = useState(!value);

    // Use text area when input is long.
    const useTextArea = value.length >= minLargeSearchBoxLength;

    // Tipping point for transition animation. Should be one character larger than text area threshold for
    // smooth animation.
    const useLarge = value.length >= minLargeSearchBoxLength;

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
        // Disable typeahead when suggester is down.
        return;
    }

    // Called to empty suggestions (e.g. after pressing escape).
    function clearSuggestions() {
        setSuggestions([]);
    }

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'Search for books, articles, journals, databases',
        value,
        onChange: onTyping,
        name: 'any',
        id: searchBoxId,
        autoFocus: hasFocus,
        onFocus: event => setHasFocus(true),
        onBlur: event => setHasFocus(false)
    };

    const smallBoxProps = {
        searchBoxId,
        suggestions,
        fetchSuggestions,
        clearSuggestions,
        onSuggestionSelected,
        inputProps
    };

    const largeBoxProps = {
        onTyping,
        searchBoxId,
        value,
        setHasFocus
    };

    const searchBox = useTextArea ? <LargeSearchBox {...largeBoxProps}/> : <SmallSearchBox {...largeBoxProps}/>;

    return <CSSTransition
        in={useLarge}
        timeout={200}
        classNames="searchbox-animate">
        {searchBox}
    </CSSTransition>
}

export default SearchBoxContainer;
