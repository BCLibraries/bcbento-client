import React, {Component} from 'react';
import buildResultsBoxes from './slots/BuildResultsBoxes.jsx';
import App from "./App";
import SearchBox from './search-box/SearchBox';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        const searchString = getUrlParameter('any');

        this.state = {
            searchString: searchString,
            inputValue: ''
        };


        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(value) {
        this.setState({inputValue: value});
    }

    handleSubmit() {
        this.setState({searchString: this.state.inputValue});
    }

    render() {
        const resultsBoxContainer = buildResultsBoxes(this.state.searchString);

        const searchBox = <SearchBox searchString={this.state.searchString}
                                     handleTyping={this.handleInput}
                                     handleSubmit={this.handleSubmit}/>;

        return <App searchBox={searchBox} searchString={this.state.searchString} resultsBoxContainer={resultsBoxContainer}/>;
    }
}

function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default AppContainer;