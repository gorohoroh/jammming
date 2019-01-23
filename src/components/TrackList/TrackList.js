import React from "react";
import './TrackList.css'
import Track from './../Track/Track'

class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.renderTracks = this.renderTracks.bind(this);
    }

    render() {
        return <div className="TrackList">
            {
                !this.props.tracklist ?
                    <span>No tracks available</span> :
                    this.renderTracks(this.props.tracklist.tracks)
            }
        </div>;
    }

    renderTracks(tracks) {
        return tracks.map(track =>
            <Track key={track.id}
                   track={track}
                   artist={track.artist}
                   album={track.album}
                   name={track.name}
                   onAdd={this.props.onAdd}
                   onRemove={this.props.onRemove}
                   isRemoval={this.props.isRemoval}/>)
    }
}

export default TrackList;