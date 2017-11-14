import React, { Component } from 'react';
import './FinishedHeroAcaCard.css';

export class FinishedHeroAcaCard extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<dl className="row">
						<dt className="col s6">Name:</dt>
						<dd className="col s6">Izuku Midoriya</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Codename:</dt>
						<dd className="col s6">Deku</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Affiliation:</dt>
						<dd className="col s6">Hero</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Quirk:</dt>
						<dd className="col s6">One For All (Super-Human Strength)</dd>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">Incompatible Body, Poor Quirk Control, Low Self-Esteem</dd>
					</dl>
				</div>
			</div>
		)
	}
}