import React from "react";
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    render() {
        return <div className="SearchBar">
            <input placeholder="Enter A Song Title"
                   onChange={this.handleTermChange}/>
            <a>SEARCH</a>
        </div>;
    }

    search() {
        // TODO. Step 69. In SearchBar.js, create a method called search that passes the state of the term to this.props.onSearch.
    }

    handleTermChange(e) {
        // TODO. Step 71:
        // * Accepts an event argument
        // * Sets the state of the search bar's term to the event target's value. (HOW?)
    }
}

export default SearchBar