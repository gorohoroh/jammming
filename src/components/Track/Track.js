import React from 'react';
import './Track.css'

class Track extends React.Component {

    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }

    render() {
        return <div className="Track">
            <div className="Track-information">
                <h3>{this.props.name}</h3>
                <p>{this.props.artist} | {this.props.album}</p>
            </div>
            <a className="Track-action" onClick={this.addTrack}>+ or -</a>
        </div>
    }

    addTrack() { this.props.onAdd(this.props.track); }

    // TODO From step 27:  Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action. No idea what I'm expected to do so far...

}

export default Track;