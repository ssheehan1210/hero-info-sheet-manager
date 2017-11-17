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
			<div>
				<div className='row'>
					<div className="col s12">
						<h1>Character Info Sheet Manager</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						<h3 className="text-six">Username Sign-In</h3>
						<input type='text' onKeyPress={this.login}/>
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						<img className="img-fluid" src="http://www.selfvirtue.com/wp-content/uploads/2017/03/superhero-costumes-for-men.jpg" />
					</div>
				</div>
			</div>
		)
	}
}