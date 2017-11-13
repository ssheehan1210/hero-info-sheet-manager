import React, { Component } from 'react';
import './FinishedDCCard.css';

export class FinishedDCCard extends Component {
	render() {
		return (
			<div className="card">
				<img className="card-img-top dc-image" src="https://starbaseatlanta.com/wp-content/uploads/dp-maab71127-510x600.jpg" alt="Card image cap"/>
				<div className="card-block">
					<h4 className="card-title">DC Hero Name</h4>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<button type="button" className="btn btn-primary">Edit</button>
					<button type="button" className="btn btn-secondary">Delete</button>
				</div>
			</div>
		)
	}
}