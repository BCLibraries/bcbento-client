import React, {Component} from 'react';
import BookResults from './BookResults.jsx';

class BookResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: props.searchString,
            output: ''
        };
    }

    componentDidMount() {
        console.log('books mounted');
    }

    render() {
        return <BookResults searchString={this.props.searchString} />;
    }
}

export default BookResultsContainer;