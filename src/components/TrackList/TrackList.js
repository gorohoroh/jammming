import React from "react";
import './TrackList.css'
import Track from './../Track/Track'

class TrackList extends React.Component {
    render() {
        return <div className="TrackList">
            {
                !this.props.tracklist ?
                    <span>No tracks available</span> :
                    this.props.tracklist.tracks.map(track =>
                        <Track key={track.id}
                               artist={track.artist}
                               album={track.album}
                               name={track.name}/>)
            }
        </div>;
    }
}

export default TrackList;