import React from 'react';

/**
 * Screen that appears before a search is performed
 *
 * @returns {JSX.Element}
 * @constructor
 */
function BlankSearchScreen() {
    return (
        <div className="blank-search-screen">
            <div className="blank-search-screen__explanation">
                Search for just about anything in or about the Libraries.
            </div>
        </div>
    );
}

export default BlankSearchScreen;
