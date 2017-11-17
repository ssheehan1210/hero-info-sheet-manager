import React, { Component } from 'react';
import './UserPage.css';
import {DCSheet} from '../DCSheet/DCSheet.js';
import {FinishedDCCard} from '../FinishedDCCard/FinishedDCCard.js';
import {FinishedHeroAcaCard} from '../FinishedHeroAcaCard/FinishedHeroAcaCard.js';
import {FinishedMarvelCard} from '../FinishedMarvelCard/FinishedMarvelCard.js';
import {HeroAcaSheet} from '../HeroAcaSheet/HeroAcaSheet.js';
import {MarvelSheet} from '../MarvelSheet/MarvelSheet.js';

export class UserPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			targetDcHeroImage: '',
			targetAcademiaHeroImage: '',
			targetMarvelHeroImage: '',
			targetHeroEditData: [{}],
			targetidInputValue: '',
			targetnameInputValue: '',
			targettitleInputValue: '',
			targetsubtitleInputValue: '',
			targetoverEighteenInputValue: '',
			targetgenderInputValue: '',
			targethometownInputValue: '',
			targetcurrentLocationInputValue: '',
			targetimageInputValue: '',
			targetaffiliationInputValue: '',
			targethasSuperpowersInputValue: '',
			targetpowersInputValue: '',
			targetabilitiesInputValue: '',
			targetarsenalInputValue: '',
			targetweaknessesInputValue: '',
			characterOverEighteen: true,
			notOverEighteen: false,
			hasSuperpowers: true,
			hasNoSuperpowers: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({value: e.target.value});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = (e) => {
		alert('A name was submitted: ', this.state.value);
		e.preventDefault();
	}

	currentDCHero = () => {
		const state = this.state;
		const foundData = this.props.data.find(x => x.dc_hero === true);
		state.targetHeroEditData = foundData;
		state.targetidInputValue = state.targetHeroEditData.id;
		state.targetnameInputValue = state.targetHeroEditData.name;
		state.targettitleInputValue = state.targetHeroEditData.title;
		state.targetsubtitleInputValue = state.targetHeroEditData.subtitle;
		state.targetoverEighteenInputValue = state.targetHeroEditData.over_eighteen;
		state.targetgenderInputValue = state.targetHeroEditData.gender;
		state.targethometownInputValue = state.targetHeroEditData.hometown;
		state.targetcurrentLocationInputValue = state.targetHeroEditData.current_location;
		state.targetimageInputValue = state.targetHeroEditData.image;
		state.targetaffiliationInputValue = state.targetHeroEditData.affiliation;
		state.targethasSuperpowersInputValue = state.targetHeroEditData.has_superpowers;
		state.targetpowersInputValue = state.targetHeroEditData.powers;
		state.targetabilitiesInputValue = state.targetHeroEditData.abilities;
		state.targetarsenalInputValue = state.targetHeroEditData.arsenal;
		state.targetweaknessesInputValue = state.targetHeroEditData.weaknesses;
		this.setState(state);
		console.log(this.state.targetHeroEditData);
	}

	currentAcademiaHero = () => {
		const state = this.state;
		state.targetHeroEditData = this.props.data.find(x => x.academia_hero === true);
		this.setState(state);
	}

	currentMarvelHero = () => {
		const state = this.state;
		state.targetHeroEditData = this.props.data.find(x => x.marvel_hero === true);
		this.setState(state);
	}

	finishedEditing = () => {
		const state = this.state;
		console.log(state.targetHeroEditData, 'this is the current state of the targetHeroEditData');
		// state.targetidInputValue = state.targetHeroEditData.id;
		// state.targetnameInputValue = state.targetHeroEditData.name;
		// state.targettitleInputValue = state.targetHeroEditData.title;
		// state.targetsubtitleInputValue = state.targetHeroEditData.subtitle;
		// state.targetoverEighteenInputValue = state.targetHeroEditData.over_eighteen;
		// state.targetgenderInputValue = state.targetHeroEditData.gender;
		// state.targethometownInputValue = state.targetHeroEditData.hometown;
		// state.targetcurrentLocationInputValue = state.targetHeroEditData.current_location;
		// state.targetimageInputValue = state.targetHeroEditData.image;
		// state.targetaffiliationInputValue = state.targetHeroEditData.affiliation;
		// state.targethasSuperpowersInputValue = state.targetHeroEditData.has_superpowers;
		// state.targetpowersInputValue = state.targetHeroEditData.powers;
		// state.targetabilitiesInputValue = state.targetHeroEditData.abilities;
		// state.targetarsenalInputValue = state.targetHeroEditData.arsenal;
		// state.targetweaknessesInputValue = state.targetHeroEditData.weaknesses;
		// this.setState(state);
		this.props.editHeroInfo(state.targetidInputValue, state.targetnameInputValue, state.targettitleInputValue, state.targetsubtitleInputValue, state.targetoverEighteenInputValue, state.targetgenderInputValue, state.targethometownInputValue, state.targetcurrentLocationInputValue, state.targetimageInputValue, state.targetaffiliationInputValue, state.targethasSuperpowersInputValue, state.targetpowersInputValue, state.targetabilitiesInputValue, state.targetarsenalInputValue, state.targetweaknessesInputValue);
	}

	handleInput = (e) => {
		const state = this.state;
		state.targetidInputValue = state.targetHeroEditData.id;
		if (e.target.id === "dchero-name") {
			state.targetnameInputValue = e.target.value;
		} else if (e.target.id === "dchero-title") {
			state.targettitleInputValue = e.target.value;
		} else if (e.target.id === "dchero-subtitle") {
			state.targetsubtitleInputValue = e.target.value;
		} else if (e.target.id === "dchero-over-eighteen" || e.target.id === "dchero-under-eighteen") {
			state.targetoverEighteenInputValue = e.target.value;
		} else if (e.target.id === "dchero-gender") {
			state.targetgenderInputValue = e.target.value;
		} else if (e.target.id === "dchero-hometown") {
			state.targethometownInputValue = e.target.value;
		} else if (e.target.id === "dchero-current-location") {
			state.targetcurrentLocationInputValue = e.target.value;
		} else if (e.target.id === "dchero-image") {
			state.targetimageInputValue = e.target.value;
		} else if (e.target.id === "dchero-affiliation") {
			state.targetaffiliationInputValue = e.target.value;
		} else if (e.target.id === "dchero-has-superpowers" || e.target.id === "dchero-has-no-superpowers") {
			state.targethasSuperpowersInputValue = e.target.value;
		} else if (e.target.id === "dchero-powers") {
			state.targetpowersInputValue = e.target.value;
		} else if (e.target.id === "dchero-abilities") {
			state.targetabilitiesInputValue = e.target.value;
		} else if (e.target.id === "dchero-arsenal") {
			state.targetarsenalInputValue = e.target.value;
		} else if (e.target.id === "dchero-weaknesses") {
			state.targetweaknessesInputValue = e.target.value;
		}
		this.setState(state);
	}

	render() {
		// this.props.data.map((item, i) => {
		// 	const state = this.state;
		// 	console.log(this.props.data, 'current data');
		// 	console.log(this.props.data[0], 'first array item for data');
		// 	console.log(this.props.data[0].abilities, 'this should say Twin Pistols');
		// 	console.log(this.props.data[0].dc_hero, 'this should be true');
		// 	console.log(typeof(this.props.data[0].dc_hero), 'this is the data type for true');
		// 	console.log(item, 'this is the item');
		// 	if (item.dc_hero === true) {
		// 		this.state.dcData = item;
		// 	} else if (item.academia_hero === true) {
		// 		this.state.academiaData = item;
		// 	} else if (item.marvel_hero === true) {
		// 		this.state.marvelData = item;
		// 	}
		// 	this.setState(state);
		// 	console.log(this.state.dcData, 'this is the dcData now after setting the state');
		// })

		const villainCardDesign = "background-color: #333; border-color: #333;";

		console.log(this.props.data, 'trying to get the image in this data');
		const state = this.state;
		state.targetDcHeroImage = this.props.data.find(x => x.dc_hero === true).image;
		state.targetAcademiaHeroImage = this.props.data.find(x => x.academia_hero === true).image;
		state.targetMarvelHeroImage = this.props.data.find(x => x.marvel_hero === true).image;


		return (
			<div onSubmit={this.handleSubmit}>
				<div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">Edit Character</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label className="form-control-label">Name:</label>
										<input type="text" className="form-control" id="dchero-name" value={this.state.targetnameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Title:</label>
										<input type="text" className="form-control" id="dchero-title" value={this.state.targettitleInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Subtitle:</label>
										<input type="text" className="form-control" id="dchero-subtitle" value={this.state.targetsubtitleInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label>Age is Over Eighteen:</label>
										<div className="form-check">
										{this.state.targetHeroEditData.over_eighteen ?
											<label className="form-check-label">
												<input className="form-check-input" id="dchero-over-eighteen" name="characterOverEighteen" type="checkbox" value={this.state.targetoverEighteenInputValue} onChange={this.handleInputChange} checked/> Check if True
											</label>
										:
											<label className="form-check-label">
												<input className="form-check-input" id="dchero-under-eighteen" name="notOverEighteen" type="checkbox" value={this.state.targetoverEighteenInputValue} onChange={this.handleInputChange} /> Check if True
											</label>
										}
										</div>
									</div>
									<div className="form-group">
										<label className="form-control-label">Gender:</label>
										<input type="text" className="form-control" id="dchero-gender" value={this.state.targetgenderInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Hometown:</label>
										<input type="text" className="form-control" id="dchero-hometown" value={this.state.targethometownInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Current Location:</label>
										<input type="text" className="form-control" id="dchero-current-location" value={this.state.targetcurrentLocationInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Image (HTTP Link):</label>
										<input type="text" className="form-control" id="dchero-image" value={this.state.targetimageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Affiliation:</label>
										<input type="text" className="form-control" id="dchero-affiliation" value={this.state.targetaffiliationInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label>Does This Character have Superpowers?</label>
										<div className="form-check">
										{this.state.targetHeroEditData.has_superpowers ?
											<label className="form-check-label">
												<input className="form-check-input" id="dchero-has-superpowers" name="hasSuperpowers" type="checkbox" value={this.state.targethasSuperpowersInputValue} onChange={this.handleInputChange} checked/> Check if True
											</label>
										:
											<label className="form-check-label">
												<input className="form-check-input" id="dchero-has-no-superpowers" name="hasNoSuperpowers" type="checkbox" value={this.state.targethasSuperpowersInputValue} onChange={this.handleInputChange} /> Check if True
											</label>
										}
										</div>
									</div>
									<div className="form-group">
										<label className="form-control-label">Powers:</label>
										<input type="text" className="form-control" id="dchero-powers" value={this.state.targetpowersInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Abilities:</label>
										<input type="text" className="form-control" id="dchero-abilities" value={this.state.targetabilitiesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Arsenal:</label>
										<input type="text" className="form-control" id="dchero-arsenal" value={this.state.targetarsenalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
									<div className="form-group">
										<label className="form-control-label">Weaknesses:</label>
										<input type="text" className="form-control" id="dchero-weaknesses" value={this.state.targetweaknessesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button value="Submit" type="button" className="btn btn-primary" onClick={this.finishedEditing}>Save changes</button>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col s12 userhead-container">
							<h3>{this.props.currentUsername}'s Hero Character Sheets</h3>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="card-deck">
							{this.props.isNotDCHero ?
								<div className="card card-inverse" id="villainCardDesign">
									<img className="card-img-top" src={this.state.targetDcHeroImage} alt="DC Villain card"/>
									<div className="card-block">
										<h4 className="card-title">DC</h4>
										<FinishedDCCard data={this.props.data}/>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onClick={this.currentDCHero}>Edit</button>
										<button type="button" className="btn btn-danger">Delete</button>
									</div>
								</div>
							:
								<div className="card">
									<img className="card-img-top" src={this.state.targetDcHeroImage} alt="DC Hero card"/>
									<div className="card-block">
										<h4 className="card-title">DC</h4>
										<FinishedDCCard data={this.props.data}/>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onClick={this.currentDCHero}>Edit</button>
										<button type="button" className="btn btn-danger">Delete</button>
									</div>
								</div>
							}
							{this.props.isNotAcademiaHero ?
								<div className="card card-inverse" style={villainCardDesign}>
									<img className="card-img-top" src={this.state.targetAcademiaHeroImage} alt="HeroAca Villain card"/>
									<div className="card-block">
										<h4 className="card-title">My Hero Academia</h4>
										<FinishedHeroAcaCard data={this.props.data}/>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Edit</button>
										<button type="button" className="btn btn-danger">Delete</button>
									</div>
								</div>
							:
								<div className="card">
									<img className="card-img-top" src={this.state.targetAcademiaHeroImage} alt="HeroAca Hero card"/>
									<div className="card-block">
										<h4 className="card-title">My Hero Academia</h4>
										<FinishedHeroAcaCard data={this.props.data}/>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Edit</button>
										<button type="button" className="btn btn-danger">Delete</button>
									</div>
								</div>
							}
							{this.props.isNotMarvelHero ?
								<div className="card card-inverse" style={villainCardDesign}>
									<img className="card-img-top" src={this.state.targetMarvelHeroImage} alt="Marvel Villain card"/>
									<div className="card-block">
										<h4 className="card-title">Marvel</h4>
										<FinishedHeroAcaCard data={this.props.data}/>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Edit</button>
										<button type="button" className="btn btn-danger">Delete</button>
									</div>
								</div>
							:
								<div className="card">
									<img className="card-img-top" src={this.state.targetMarvelHeroImage} alt="Marvel Hero card"/>
									<div className="card-block">
										<h4 className="card-title">Marvel</h4>
										<FinishedMarvelCard data={this.props.data}/>
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">Edit</button>
										<button type="button" className="btn btn-danger">Delete</button>
									</div>
								</div>
							}
							</div>
						</div>
					</div>
					<div className="row" id="new-sheets-buttons">
						<div className="col s4">
							<button id="button-one" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#create-dc-sheet" aria-expanded="false" aria-controls="create-dc-sheet">Create DC Character</button>
						</div>
						<div className="col s4" id="middle-new-sheets-button">
							<button id="button-two" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#create-heroaca-sheet" aria-expanded="false" aria-controls="create-heroaca-sheet">Create HeroAca Character</button>
						</div>
						<div className="col s4">
							<button id="button-three" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#create-marvel-sheet" aria-expanded="false" aria-controls="create-marvel-sheet">Create Marvel Character</button>
						</div>
					</div>
					<div className="row collapse" id="create-dc-sheet">
						<div className="col s12">
							<DCSheet />
						</div>
					</div>
					<div className="row collapse" id="create-heroaca-sheet">
						<div className="col s12">
							<HeroAcaSheet />
						</div>
					</div>
					<div className="row collapse" id="create-marvel-sheet">
						<div className="col s12">
							<MarvelSheet />
						</div>
					</div>
					<div className="row invisible">
						<div className="col s12">
							<p>This text should be invisible</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}