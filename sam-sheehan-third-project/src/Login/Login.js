import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
	login = (e) => {
		if (e.key === 'Enter'){
			this.props.getLoggedIn(e.target.value);
		}
	}

	render() {
		return (
			<div className='row'>
				<div className='col s12'>
					<h3>User Sign-In:</h3>
					<p className='text-six'>This represents the User login layout.</p>
					<input type='text' onKeyPress={this.login}/>
				</div>
			</div>
		)
	}
}