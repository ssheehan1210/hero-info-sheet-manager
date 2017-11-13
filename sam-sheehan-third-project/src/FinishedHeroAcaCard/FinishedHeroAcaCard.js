import React, { Component } from 'react';
import './FinishedHeroAcaCard.css';

export class FinishedHeroAcaCard extends Component {
	render() {
		return (
			<div className="card">
				<img className="card-img-top aca-image" src="https://starbaseatlanta.com/wp-content/uploads/dp-maab71127-510x600.jpg" alt="Card image cap"/>
				<div className="card-block">
					<h4 className="card-title">My Hero Academia</h4>
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
					<button type="button" className="btn btn-primary">Edit</button>
					<button type="button" className="btn btn-secondary">Delete</button>
				</div>
			</div>
		)
	}
}