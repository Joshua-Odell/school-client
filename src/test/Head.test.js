import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Head from '../Head';

it('S App', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Head />, div);
	ReactDOM.unmountComponentAtNode(div);
});
