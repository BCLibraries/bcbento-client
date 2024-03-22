import React, {Component} from 'react';
import ErrorBox from "./ErrorBox";
import {Logger} from '../Logger';

/**
 * Error boundary for result boxes
 *
 * If an individual result box errors out, do not let the entire application
 * die. Just display an error for that box.
 *
 * Error boundaries work better as class components than functional components
 * for now. Hopefully this will one day be replaced with a function.
 */
class ResultBoxErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        Logger.error(`Error presenting results: ${error.statusCode} ${error.message}`);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorBox heading={this.props.heading}/>
        }

        return this.props.children;
    }
}

export default ResultBoxErrorBoundary;
