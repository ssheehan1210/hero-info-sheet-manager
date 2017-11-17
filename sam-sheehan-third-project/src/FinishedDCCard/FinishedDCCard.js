import React, { Component } from 'react';
import './FinishedDCCard.css';

export class FinishedDCCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isNotDcHero: false,
			targetDcHero: '',
			nameOnDcCard: '',
			titleOnDcCard: '',
			affiliationOnDcCard: '',
			powersOnDcCard: '',
			abilitiesOnDcCard: '',
			weaknessesOnDcCard: ''
		};
	}

	render() {
		console.log(this.props.data, 'this is the initial data being rendered for the DC card');
		const state = this.state;
		state.targetDcHero = this.props.data.find(x => x.dc_hero === true);
		state.nameOnDcCard = state.targetDcHero.name;
		state.titleOnDcCard = state.targetDcHero.title;
		state.affiliationOnDcCard = state.targetDcHero.affiliation;
		state.powersOnDcCard = state.targetDcHero.powers;
		state.abilitiesOnDcCard = state.targetDcHero.abilities;
		state.weaknessesOnDcCard = state.targetDcHero.weaknesses;

		return (
			<div>
				<div className="container">
					<dl className="row">
						<dt className="col s6">Name:</dt>
						<dd className="col s6">{this.state.nameOnDcCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Public Persona:</dt>
						<dd className="col s6">{this.state.titleOnDcCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Morality:</dt>
						<dd className="col s6">{this.state.affiliationOnDcCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Abilities / Superpowers:</dt>
						<dd className="col s6">{this.state.abilitiesOnDcCard}, {this.state.powersOnDcCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">{this.state.weaknessesOnDcCard}</dd>
					</dl>
				</div>
			</div>
		)
	}
}