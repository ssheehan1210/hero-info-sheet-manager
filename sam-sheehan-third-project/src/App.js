import React, { Component } from 'react';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import {Login} from './Login/Login.js';
import {UserPage} from './UserPage/UserPage.js';

const request = require('superagent');

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      isLoggedIn: false,
      currentUsername: ''
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:9292/heroes')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'data being pulled in');
        const state = this.state;
        state.data = data;
        console.log(state.data, 'this should be the same as the data');
        this.setState(state);
      })
  }

  getCurrentData = () => {
    fetch('http://localhost:9292/heroes')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'new data being pulled in');
        const state = this.state;
        state.data = data;
        console.log(state.data, 'new state of the data');
        this.setState(state);
      })
  }

  getLoggedIn = (username) => {
    const state = this.state;
    state.currentUsername = username;
    state.isLoggedIn = true;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
          {this.state.isLoggedIn ? <UserPage currentUsername={this.state.currentUsername} data={this.state.data} /> : <Login getLoggedIn={this.getLoggedIn} />}
      </div>
    );
  }
}

export default App;
