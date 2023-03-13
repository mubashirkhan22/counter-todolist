import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            number: '',
            city: ''
        }
        this.array = []


    }


    onSubmitHandler = (e) => {
        e.preventDefault()
        this.array.push(this.state)
        console.log(this.array);
        this.setState({ name: '', email: '', number: '', city: '' })

    }
    onChangeHandlerName = (event) => {
        const value = event.target.value;
        console.log(value);
        this.setState({ name: value });
    }




    onChangeHandlerEmail = (event) => {
        const value = event.target.value;
        this.setState({ email: value });
    }

    onChangeHandlerNumber = (event) => {
        const value = event.target.value;
        this.setState({ number: value });
    }

    onChangeHandlerCity = (event) => {
        const value = event.target.value;
        this.setState({ city: value });
    }

    render() {
        const listItem = this.array.map((item, index) => {
            return (

                <ul style={{
                    listStyle: 'none',
                    background: 'burlywood',
                    border: ' black solid 1px'
                }}>
                    <li>Name: {item.name}</li>
                    <li>Email-Id: {item.email}</li>
                    <li>Name: {item.number}</li>
                    <li>Email-Id: {item.city}</li>
                </ul>

            )
        })
        return (

            <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <Link to={'/'}>Counter</Link>

                <h1><b>FORM</b></h1>
                <form onSubmit={this.onSubmitHandler} >
                    <input type={'text'} placeholder={'Enter Name'} value={this.state.name} onChange={this.onChangeHandlerName} /> <br />
                    <input type={'text'} placeholder={'Enter EmailId'} value={this.state.email} onChange={this.onChangeHandlerEmail} /><br />
                    <input type={'number'} placeholder={'Enter Number'} value={this.state.number} onChange={this.onChangeHandlerNumber} /><br />
                    <input type={'text'} placeholder={'Enter City'} value={this.state.city} onChange={this.onChangeHandlerCity} /><br />
                    <button type='submit' >Submit</button>
                </form>

                {listItem}
                {/* <li>Phone Number: {this.state.formData.number}</li>
                    <li>City Name: {this.state.formData.city}</li> */}
            </div>
        )
    }
}

export default TodoList
