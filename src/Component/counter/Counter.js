import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
class Counter extends Component {
    state = { count: 0 }
    onDecrement = () => {
        this.setState(({ count:this.state.count - 1 }))
    }
    onIncrement = () => {
        this.setState(({ count: this.state.count + 1 }))
    }

    render() {
        return (
            <div className='app-container' style={{display:'flex', justifyContent:'center'}}>
            <Link to={'form'}>Form</Link>
                <div className='containt-container'>
                    <h1 className='heading'>Counter</h1>
                    <p className='Counter'>{this.state.count}</p>
                   <Buttons decrementFunction={this.onDecrement} incrementFunction={this.onIncrement}/>
                </div>
            </div>)
    }
}

export default Counter
