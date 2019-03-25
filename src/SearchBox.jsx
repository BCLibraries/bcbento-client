import React from 'react';

function SearchBox({inputValue, handleInput, handleSubmit}) {
    return <form onSubmit={handleSubmit}>
        <input type={'text'} value={inputValue} onChange={handleInput}/>
    </form>;
}

export default SearchBox;