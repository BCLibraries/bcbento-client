import React from 'react';
import ErrorBox from "./ErrorBox";
import {Logger} from "../Logger";

/**
 * Error boundary for the search box
 *
 * If something goes so wrong that the search box can't even display, this
 * will pop up an error box instead of failing entirely
 */
class SearchComponentErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);
        Logger.error(`${error.message}: ${errorInfo.componentStack}`);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorBox heading={'Error'}/>
        }

        return this.props.children;
    }

}

export default SearchComponentErrorBoundary;
