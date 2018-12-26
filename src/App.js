import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends React.Component{
  render() {
    return (
      <h2>Hello World {this.props.userName}</h2>
    )
  }
}

class TableRow extends React.Component{
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}

const appUrl = 'http://127.0.0.1:8000/'

class Button extends React.Component {
  handleClick = () => {
    console.log("signin method called")

    let email = 'arthur.nangai@gmail.com'
    let password = 'password'
    let username = 'artyGuy'
  
    fetch(appUrl + 'api/users/', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"user": {email: email, password: password, username: username }})
    }).then((res) => res.json())
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
  }
  render() {
  	return (
    	<button onClick={this.handleClick}>
      Login
      </button>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
           "id":1,
           "name":"Foo",
           "age":"20"
        },
        {
           "id":2,
           "name":"Bar",
           "age":"30"
        },
        {
           "id":3,
           "name":"Baz",
           "age":"40"
        },
        {
          "id":4,
          "name":"Jack",
          "age":"25"
       }
     ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <HelloWorld userName={'Nangai Arthur'} />
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data = {person} />)}
          </tbody>
        </table>
        <Button/>
      </div>
    )
  }
}

export default App;