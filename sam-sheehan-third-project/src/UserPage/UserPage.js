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
				<div className="row">
					<div className="col s12 userhead-container">
						<h3>{this.props.currentUsername}'s Hero Character Sheets</h3>
					</div>
				</div>
				<div className="row">
					<div className="card-deck">
						<FinishedDCCard />
						<FinishedHeroAcaCard />
						<FinishedMarvelCard />
					</div>
				</div>
				<div className="row">
					<DCSheet />
					<HeroAcaSheet />
					<MarvelSheet />
				</div>
			</div>
		)
	}
}