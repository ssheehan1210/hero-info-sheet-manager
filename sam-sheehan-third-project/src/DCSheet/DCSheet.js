import React, { Component } from 'react';
import './DCSheet.css';

export class DCSheet extends Component {
	constructor(props){
		super(props);
		this.state = {
			nameInputValue: '',
			titleInputValue: '',
			subtitleInputValue: '',
			overEighteenInputValue: '',
			genderInputValue: '',
			hometownInputValue: '',
			currentLocationInputValue: '',
			imageInputValue: '',
			affiliationInputValue: '',
			hasSuperpowersInputValue: '',
			powersInputValue: '',
			abilitiesInputValue: '',
			arsenalInputValue: '',
			weaknessesInputValue: ''
		};
	}

	// handleInput = (e) => {
	// 	if (e.key === 'Enter') {
	// 		const state = this.state;
	// 		this.props.editHeroInfo(state.focusedId, state.nameInputValue)
	// 	}
	// }

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h3>New DC Character</h3>
						</div>
					</div>
					<div className="row">
						<form>
							<div className="form-group row">
								<label className="col s2 col-form-label">Name:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.nameInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Title:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.titleInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Subtitles:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.subtitleInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2">Age is Over Eighteen:</label>
								<div className="col s10">
									<div className="form-check">
										<label className="form-check-label">
											<input className="form-check-input" type="checkbox" value={this.state.overEighteenInputValue}/> Check if True
										</label>
									</div>
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Gender:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.genderInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Hometown:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.hometownInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Current Location:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.currentLocationInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Character Image (use HTTP image address):</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.imageInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Affiliation:</label>
								<div className="col s10">
									<select className="form-control">
										<option value>Choose...</option>
										<optgroup label="The Good Guys">
											<option value>Hero</option>
											<option value>Anti-Hero</option>
										</optgroup>
										<optgroup label="The Bad Guys">
											<option value>Villain</option>
											<option value>Anti-Villain</option>
										</optgroup>
									</select>
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2">Character Has Superpowers:</label>
								<div className="col s10">
									<div className="form-check">
										<label className="form-check-label">
											<input className="form-check-input" type="checkbox" value={this.state.hasSuperpowersInputValue}/> Check if True
										</label>
									</div>
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Powers:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.powersInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Abilities:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.abilitiesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Arsenal:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.arsenalInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<label className="col s2 col-form-label">Weaknesses:</label>
								<div className="col s10">
									<input type="text" className="form-control" value={this.state.weaknessesInputValue} onKeyPress={this.handleInput} onChange={this.handleInput} />
								</div>
							</div>
							<div className="form-group row">
								<div className="offset-sm-2 col s10">
									<button type="submit" className="btn btn-primary">Create Character</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}