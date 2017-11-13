import React, { Component } from 'react';
import './App.css';
import {DCSheet} from './DCSheet/DCSheet.js';
import {FinishedDCCard} from './FinishedDCCard/FinishedDCCard.js';
import {FinishedHeroAcaCard} from './FinishedHeroAcaCard/FinishedHeroAcaCard.js';
import {FinishedMarvelCard} from './FinishedMarvelCard/FinishedMarvelCard.js';
import {HeroAcaSheet} from './HeroAcaSheet/HeroAcaSheet.js';
import {Login} from './Login/Login.js';
import {MarvelSheet} from './MarvelSheet/MarvelSheet.js';
import {UserPage} from './UserPage/UserPage.js';


const request = require('superagent');

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      isLoggedIn: false
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
    fetch('http://localhost:9292/todo')
      .then(response => response.json())
      .then(data => {
        console.log(data, 'new data being pulled in');
        const state = this.state;
        state.data = data;
        console.log(state.data, 'new state of the data');
        this.setState(state);
      })
  }

  render() {
    return (
      <div className="App">
        <DCSheet />
        <FinishedDCCard />
        <FinishedHeroAcaCard />
        <FinishedMarvelCard />
        <HeroAcaSheet />
        <Login />
        <MarvelSheet />
        <UserPage />
      </div>
    );
  }
}

export default App;
