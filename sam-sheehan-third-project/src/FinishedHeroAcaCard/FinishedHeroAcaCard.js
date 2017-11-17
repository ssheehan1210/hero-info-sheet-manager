import React, { Component } from 'react';
import './FinishedHeroAcaCard.css';

export class FinishedHeroAcaCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			isNotAcademiaHero: false,
			targetAcademiaHero: '',
			nameOnAcademiaCard: '',
			titleOnAcademiaCard: '',
			affiliationOnAcademiaCard: '',
			powersOnAcademiaCard: '',
			abilitiesOnAcademiaCard: '',
			weaknessesOnAcademiaCard: ''
		};
	}

	render() {
		console.log(this.props.data, 'this is the initial data being rendered for the Academia card');
		const state = this.state;
		state.targetAcademiaHero = this.props.data.find(x => x.academia_hero === true);
		state.nameOnAcademiaCard = state.targetAcademiaHero.name;
		state.titleOnAcademiaCard = state.targetAcademiaHero.title;
		state.affiliationOnAcademiaCard = state.targetAcademiaHero.affiliation;
		state.powersOnAcademiaCard = state.targetAcademiaHero.powers;
		state.abilitiesOnAcademiaCard = state.targetAcademiaHero.abilities;
		state.weaknessesOnAcademiaCard = state.targetAcademiaHero.weaknesses;

		return (
			<div>
				<div className="container">
					<dl className="row">
						<dt className="col s6">Name:</dt>
						<dd className="col s6">{this.state.nameOnAcademiaCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Codename:</dt>
						<dd className="col s6">{this.state.titleOnAcademiaCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Affiliation:</dt>
						<dd className="col s6">{this.state.affiliationOnAcademiaCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Quirk:</dt>
						<dd className="col s6">{this.state.powersOnAcademiaCard}</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">{this.state.weaknessesOnAcademiaCard}</dd>
					</dl>
				</div>
			</div>
		)
	}
}