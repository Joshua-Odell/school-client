import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
	<BrowserRouter>
		<Auth0Provider
			domain="dev-mv4aqq2w.us.auth0.com"
			clientId="gOV5Kclt98UEikfTMXoUmgidx4Ds78YR"
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
