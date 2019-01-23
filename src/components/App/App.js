import React from 'react';
import Playlist from '../Playlist/Playlist';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            searchResults: {
                tracks: [
                    {
                        name: 'Tiny Dancer',
                        artist: 'Elton John',
                        album: 'Madman Across The Water',
                        id: 1
                    },
                    {
                        name: 'Tiny Dancer',
                        artist: 'Tim McGraw',
                        album: 'Love Story',
                        id: 2
                    },
                    {
                        name: 'Tiny Dancer',
                        artist: 'Rockabye Baby!',
                        album: 'Lullaby Renditions of Elton John',
                        id: 3
                    },
                    {
                        name: 'Tiny Dancer',
                        artist: 'The White Raven',
                        album: 'Tiny Dancer',
                        id: 4
                    },
                    {
                        name: 'Tiny Dancer - Live Album Version',
                        artist: 'Ben Folds',
                        album: 'Ben Folds Live',
                        id: 5
                    }
                ]
            },
            playlist: {
                name: 'My playlist',
                tracks: [
                    {
                        name: 'Saving All My Love for You',
                        artist: 'Marilyn McCoo & Billy Davis Jr.',
                        album: 'Marilyn & Billy',
                        id: 1
                    },
                    {
                        name: 'Tiny Dancer',
                        artist: 'The White Raven',
                        album: 'Tiny Dancer',
                        id: 4
                    }
                ]
            }
        };
        this.authenticate = this.authenticate.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(track) {
        if (!this.state.playlist.tracks.find(item => item.id === track.id)) {
            let stateToModify = this.state;
            stateToModify.playlist.tracks = stateToModify.playlist.tracks.concat(track);
            this.setState(stateToModify);
        }
    }

    removeTrack(track) {
        let stateToModify = this.state;
        stateToModify.playlist.tracks = stateToModify.playlist.tracks.filter(item => item.id !== track.id);
        this.setState(stateToModify);
    }

    render() {
        return (
            <div className="App">
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                {this.state.loggedIn ? <SearchBar/> : <div className="SearchBar">
                    <button onClick={this.authenticate}>Log in with Spotify</button>
                </div>}
                <div className="App-playlist">
                    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
                    <Playlist playlist={this.state.playlist} onRemove={this.removeTrack} />
                </div>
            </div>
        );
    }

    authenticate() {
        if (this.state.loggedIn === false) this.setState({loggedIn: true});
    }
}

export default App;
