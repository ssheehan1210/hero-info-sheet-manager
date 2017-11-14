import React, { Component } from 'react';
import './FinishedDCCard.css';

export class FinishedDCCard extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<dl className="row">
						<dt className="col s6">Name:</dt>
						<dd className="col s6">Bruce Wayne</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Public Persona:</dt>
						<dd className="col s6">Batman</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Morality:</dt>
						<dd className="col s6">Hero</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Abilities / Superpowers:</dt>
						<dd className="col s6">Top-Tier Detective Skills, Master of Martial Arts, Master of Stelth, High Social Skills as Bruce Wayne</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">Human Limitations, Low Social Skills as Batman</dd>
					</dl>
				</div>
			</div>
		)
	}
}