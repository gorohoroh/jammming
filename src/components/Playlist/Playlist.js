import React from 'react';
import TrackList from "../TrackList/TrackList";
import './Playlist.css'

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}
                       onChange={this.handleNameChange}/>
                <TrackList tracklist={this.props.playlist}
                           onRemove={this.props.onRemove}
                           isRemoval={true}/>
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        )
    }

    handleNameChange(e) { this.props.onNameChange(e.target.value); }
}

export default Playlist;