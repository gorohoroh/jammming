import React from 'react';
import Playlist from './components/Playlist/Playlist';
import SearchResults from "./components/SearchResults/SearchResults";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.authenticate = this.authenticate.bind(this);
    }
  render() {
    return (
        <div className="App">
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            { this.state.loggedIn ?  <SearchBar/> : <div className="SearchBar">
                <button onClick={this.authenticate}>Log in with Spotify</button>
            </div>}
          <div className="App-playlist">
            <SearchResults/>
            <Playlist/>
          </div>
        </div>
    );
  }

    authenticate() {
        if (this.state.loggedIn === false) this.setState({loggedIn : true});
    }
}

export default App;
