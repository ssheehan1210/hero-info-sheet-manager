import React, { Component } from 'react';
import './UserPage.css';
import {DCSheet} from '../DCSheet/DCSheet.js';
import {FinishedDCCard} from '../FinishedDCCard/FinishedDCCard.js';
import {FinishedHeroAcaCard} from '../FinishedHeroAcaCard/FinishedHeroAcaCard.js';
import {FinishedMarvelCard} from '../FinishedMarvelCard/FinishedMarvelCard.js';
import {HeroAcaSheet} from '../HeroAcaSheet/HeroAcaSheet.js';
import {MarvelSheet} from '../MarvelSheet/MarvelSheet.js';

export class UserPage extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col s12 userhead-container">
							<h3>{this.props.currentUsername}'s Hero Character Sheets</h3>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="card-deck">
								<div className="card">
									<img className="card-img-top" src="https://starbaseatlanta.com/wp-content/uploads/dp-maab71127-510x600.jpg" alt="Card image cap"/>
									<div className="card-block">
										<h4 className="card-title">DC</h4>
										<FinishedDCCard />
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary">Edit</button>
										<button type="button" className="btn btn-secondary">Delete</button>
									</div>
								</div>
								<div className="card">
									<img className="card-img-top" src="https://starbaseatlanta.com/wp-content/uploads/dp-maab71127-510x600.jpg" alt="Card image cap"/>
									<div className="card-block">
										<h4 className="card-title">My Hero Academia</h4>
										<FinishedHeroAcaCard />
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary">Edit</button>
										<button type="button" className="btn btn-secondary">Delete</button>
									</div>
								</div>
								<div className="card">
									<img className="card-img-top" src="https://starbaseatlanta.com/wp-content/uploads/dp-maab71127-510x600.jpg" alt="Card image cap"/>
									<div className="card-block">
										<h4 className="card-title">Marvel</h4>
										<FinishedMarvelCard />
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary">Edit</button>
										<button type="button" className="btn btn-secondary">Delete</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<DCSheet />
						</div>
						<div className="col s12">
							<HeroAcaSheet />
						</div>
						<div className="col s12">
							<MarvelSheet />
						</div>
					</div>
				</div>
			</div>
		)
	}
}