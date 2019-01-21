import React from 'react';

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

}