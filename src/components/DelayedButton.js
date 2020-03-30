import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    callback = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render(){
        console.log(this.props)
        return (
            <button onClick={this.callback}>
                Delay
            </button>
        )
    }
}
