import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      loggedIn: true,
      products: [
        {
          name: 'Bubblegum',
          price: '0.99'
        },
        {
          name: 'Apple',
          price: '1.99'
        },
        {
          name: 'Gold Apple',
          price: '111110.99'
        },
      ]
    }
    
  }
  addOne(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  toggleLogin(){
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    console.log(this.counter);
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={()=> this.addOne()}>Add One</button>
        {this.state.loggedIn ? (<p>Thanks for logging in!</p>):(<p><a>Login!</a></p>)}
        <button onClick={()=> this.toggleLogin()}>Log in (dev)</button>
        <br/>
        <br/>
        <br/>
        <br/>
        {this.state.products.map((elem)=>{
          return (<div>
            <h2>{elem.name}</h2>
            <h3>{elem.price}</h3>
            <br/>
            </div>
          )
        })}

      </div>
    );
  }
}

export default App;
