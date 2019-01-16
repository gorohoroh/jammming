import React from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchResults from "./components/SearchResults/SearchResults";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults/>
            <Playlist/>
          </div>
        </div>
    );
  }
}

export default App;
