

import React, { Component } from 'react'

export class Buttons extends Component {


    render() {
        return (
            <div>
                <button className='decrese-button' type='button' onClick={this.props.decrementFunction}>decrese</button>
                <button className='decrese-button' type='button' onClick={this.props.incrementFunction}>Increment</button>
            </div>
        )
    }
}

export default Buttons

