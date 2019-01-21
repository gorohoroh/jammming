import React from 'react';
import './Track.css'

class Track extends React.Component {

    render() {
        return <div className="Track">
            <div className="Track-information">
                <h3>Track name</h3>
                <p>Artist | Album</p>
            </div>
            <a className="Track-action">+ or -</a>
        </div>
    }

    // TODO From step 27:  Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action. No idea what I'm expected to do so far...

}