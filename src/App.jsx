import React from 'react';
import './App.css';

function App({searchBox, resultsBoxContainer}) {

    return (
        <div className="App">
            {searchBox}
            {resultsBoxContainer.bookResults}
            {resultsBoxContainer.articleResults}
        </div>
    );
}

export default App;
