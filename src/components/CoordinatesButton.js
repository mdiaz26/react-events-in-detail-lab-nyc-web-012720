import React, { Component} from 'react';

export default class CoordinatesButton extends Component {

    callback = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        console.log(this.props)
        return (
            <button 
                onClick={event => this.callback(event)}>
                    Coordinates
            </button>
        )
    }
}
