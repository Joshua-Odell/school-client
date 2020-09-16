import React, { Component } from 'react';
import Input from '../Input/Input';
import { withAuthenticationRequired } from '@auth0/auth0-react';

class FormSelector extends Component {
	state = {
		school: 'NONE',
	};

	locationHandler = (event) => {
		this.setState({ school: event.target.value });
		document.getElementById('schoolList').setAttribute('hidden', true);
	};

	render() {
		return (
			<body>
				<header>
					<h1>Incident Report Form</h1>
				</header>
				<nav id="schoolList">
					<label htmlFor="school">At which site did the Incident occur?</label>
					<select
						id="school"
						name="school"
						onChange={this.locationHandler.bind(this)}
						value={this.state.value}
					>
						<option value="NONE">--NONE--</option>
						<option value="Concord">Concord Education Center</option>
						<option value="AEC">Alliance Education Center</option>
						<option value="TEA (ECSE LEC)">TEA (ECSE LEC)</option>
						<option value="Cedar">Cedar School</option>
						<option value="Budach">Budach</option>
						<option value="DHH">D/HH Programs</option>
						<option value="Options">Options</option>
					</select>
				</nav>
				<main>
					<Input school={this.state.school} />
				</main>
			</body>
		);
	}
}

export default withAuthenticationRequired(FormSelector, {
	onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
