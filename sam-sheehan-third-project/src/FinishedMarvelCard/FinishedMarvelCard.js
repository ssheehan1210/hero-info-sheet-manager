import React, { Component } from 'react';
import './FinishedMarvelCard.css';

export class FinishedMarvelCard extends Component {
	render() {
		return (
			<div className="card">
				<img className="card-img-top marvel-image" src="https://starbaseatlanta.com/wp-content/uploads/dp-maab71127-510x600.jpg" alt="Card image cap"/>
				<div className="card-block">
					<h4 className="card-title">Marvel</h4>
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
						<dd className="col s6">Hero</dd><br/>
					</dl>
					<dl className="row">
						<dt className="col s6">Abilities / Superpowers:</dt>
						<dd className="col s6">Spider-Sense, Super-Strength, Wall-Climbing, Web-Slinger</dd><br/>
					</dl>
					<dl className="row">
						<dt className="col s6">Weaknesses:</dt>
						<dd className="col s6">Reckless Attitude, Weak Mental Defense</dd>
					</dl>
					<button type="button" className="btn btn-primary">Edit</button>
					<button type="button" className="btn btn-secondary">Delete</button>
				</div>
			</div>
		)
	}
}