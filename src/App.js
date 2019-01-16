import React, { Component } from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchResults from "./components/SearchResults/SearchResults";

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="SearchBar">
            <input placeholder="Enter A Song Title"/>
            <a>SEARCH</a>
          </div>
          <div className="App-playlist">
            <SearchResults/>
            <Playlist/>
          </div>
        </div>
    );
  }
}

export default App;
