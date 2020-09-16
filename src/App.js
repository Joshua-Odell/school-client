import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Output from './Output/Output';
import FormSelector from './FormSelector/FormSelector';
import ApproverPage from './Approver/ApproverPage';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

export default class App extends Component {
	state = {
		redirect: '/login',
	};

	authCheck = () => {
		let { isAuthenticated } = useAuth0();
		if (isAuthenticated) {
			this.setState({ redirect: '/incidententry' });
		}
	};

	render() {
		return (
			<div>
				<head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="../apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="../favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="../favicon-16x16.png"
					/>
					<link rel="manifest" href="../site.webmanifest" />
				</head>
				<main onChange={this.authCheck}>
					<Switch>
						<Route path="/" exact={true}>
							<Redirect to="/login" />
						</Route>
						<Route path="/login" component={LoginButton} />
						<Route path="/incidententry" component={FormSelector} />
						<Route path="/conformationpage/:id" component={ApproverPage} />
						<Route path="/output" component={Output} />
					</Switch>
				</main>
			</div>
		);
	}
}
