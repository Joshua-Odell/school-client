import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (authCheck) => {
	const { loginWithPopup } = useAuth0();

	return (
		<div>
			<h3>Login</h3>
			<p> Please Log in to use this application further</p>
			<button
				onClick={() => loginWithPopup()}
				id="loginBtn"
				variant="primary"
				className="btn-margin"
			>
				Log In
			</button>
			<p>Email: email@email.com Password: demo123!</p>
			<p>
				This application is a data entry and manipulation software designed to
				help a level four school for kids with severe behavior problems.The
				current system they use involves entering redundant information every
				time an incident occurs which is on a very regular basis. This will
				streamline the process by reducing the demographic and location
				information that is entered each time. Instead it makes a call to the
				database confirming the accuracy of the information and retrieving
				relevant information. This software also removes the process of manually
				copying incidents to fill out PDF's. Instead with each creation of an
				incident the pdf is generated and sent to the assigned approver for
				comments or final approval. With each approval a fresh csv is generated
				with all incident information this is used to parse through the data and
				create relevant graphs automatically. Accurate recording and up to date
				information is critical to effective treatment of students. This
				programs ensures that process is streamlined while freeing up the staff
				to spend their time more effectively.
			</p>
			<p> Upon login visit </p>{' '}
			<p> "https://behaviorallog.com/incidententry"</p>
		</div>
	);
};

export default LoginButton;
