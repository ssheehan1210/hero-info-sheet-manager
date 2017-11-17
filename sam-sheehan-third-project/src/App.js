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

  addHeroInfo = (newInfo) => {
    console.log(newInfo, 'this is the hero info being added');
    request.post('http://localhost:9292/heroes')
      .type('form')
      .send({_method: 'POST'})
      .send({task: newInfo})
      .end((err, data) => {
        this.getCurrentData();
      })
  }

  editHeroInfo = (id, newName, newAcademiaHero, newDCHero, newMarvelHero, newTitle, newSubtitle, newOverEighteen, newGender, newHometown, newCurrentLocation, newImage, newAffiliation, newHasSuperpowers, newPowers, newAbilities, newArsenal, newWeaknesses) => {
    console.log(id, 'this is the id being read');
    console.log(newName, 'this is the character being read');
    console.log(newAcademiaHero, newDCHero, newMarvelHero, newTitle, newSubtitle, newOverEighteen, newGender, newHometown, newCurrentLocation, newImage, newAffiliation, newHasSuperpowers, newPowers, newAbilities, newArsenal, newWeaknesses)
    request.post('http://localhost:9292/heroes/' + id)
      .type('form')
      .send({_method: 'PUT'})
      .send({name: newName})
      .send({academia_hero: newAcademiaHero})
      .send({dc_hero: newDCHero})
      .send({marvel_hero: newMarvelHero})
      .send({title: newTitle})
      .send({subtitle: newSubtitle})
      .send({over_eighteen: newOverEighteen})
      .send({gender: newGender})
      .send({hometown: newHometown})
      .send({current_location: newCurrentLocation})
      .send({image: newImage})
      .send({affiliation: newAffiliation})
      .send({has_superpowers: newHasSuperpowers})
      .send({powers: newPowers})
      .send({abilities: newAbilities})
      .send({arsenal: newArsenal})
      .send({weaknesses: newWeaknesses})
      .end((err, data) => {
        this.getCurrentData();
      })
  }

  deleteHeroInfo = (info) => {
    console.log(info, 'this is the hero info being read');
    request.post('http://localhost:9292/heroes/' + info)
      .type('form')
      .send({_method: 'DELETE'})
      .end((err, data) => {
        this.getCurrentData();
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
          {this.state.isLoggedIn ? <UserPage deleteHeroInfo={this.deleteHeroInfo} editHeroInfo={this.editHeroInfo} addHeroInfo={this.addHeroInfo} currentUsername={this.state.currentUsername} getCurrentData={this.getCurrentData} data={this.state.data} /> : <Login getLoggedIn={this.getLoggedIn} />}
      </div>
    );
  }
}

export default App;
