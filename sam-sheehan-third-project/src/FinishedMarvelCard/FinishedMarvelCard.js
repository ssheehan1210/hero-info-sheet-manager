import React, { Component } from 'react';
import './FinishedMarvelCard.css';

export class FinishedMarvelCard extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<dl className="row">
						<dt className="col s6">Name:</dt>
						<dd className="col s6">Peter Parker</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Public Persona:</dt>
						<dd className="col s6">Spiderman</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Morality:</dt>
						<dd className="col s6">Hero</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Abilities / Superpowers:</dt>
						<dd className="col s6">Spider-Sense, Super-Strength, Wall-Climbing, Web-Slinger</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">Reckless Attitude, Weak Mental Defense</dd>
					</dl>
				</div>
			</div>
		)
	}
}