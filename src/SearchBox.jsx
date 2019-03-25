import React from 'react';

function SearchBox({inputValue, handleInput, handleSubmit}) {
    return <form method="get" action=".">
        <input type={'text'} value={inputValue} onChange={handleInput} name="any"/>
    </form>;
}

export default SearchBox;