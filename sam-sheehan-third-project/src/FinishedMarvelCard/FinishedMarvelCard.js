import React, { Component } from 'react';
import './FinishedMarvelCard.css';

export class FinishedMarvelCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isNotMarvelHero: false,
			targetMarvelHero: '',
			nameOnMarvelCard: '',
			titleOnMarvelCard: '',
			affiliationOnMarvelCard: '',
			powersOnMarvelCard: '',
			abilitiesOnMarvelCard: '',
			weaknessesOnMarvelCard: ''
		};
	}

	render() {
		console.log(this.props.data, 'this is the initial data being rendered for the Marvel card');
		const state = this.state;
		state.targetMarvelHero = this.props.data.find(x => x.marvel_hero === true);
		state.nameOnMarvelCard = state.targetMarvelHero.name;
		state.titleOnMarvelCard = state.targetMarvelHero.title;
		state.affiliationOnMarvelCard = state.targetMarvelHero.affiliation;
		state.powersOnMarvelCard = state.targetMarvelHero.powers;
		state.abilitiesOnMarvelCard = state.targetMarvelHero.abilities;
		state.weaknessesOnMarvelCard = state.targetMarvelHero.weaknesses;

		return (
			<div>
				<div className="container">
					<dl className="row">
						<dt className="col s6">Name:</dt>
						<dd className="col s6">{this.state.nameOnMarvelCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Public Persona:</dt>
						<dd className="col s6">{this.state.titleOnMarvelCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Morality:</dt>
						<dd className="col s6">{this.state.affiliationOnMarvelCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Abilities / Superpowers:</dt>
						<dd className="col s6">{this.state.powersOnMarvelCard}, {this.state.abilitiesOnMarvelCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">{this.state.weaknessesOnMarvelCard}</dd>
					</dl>
				</div>
			</div>
		)
	}
}