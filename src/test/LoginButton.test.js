import React from 'react';
import ReactDOM from 'react-dom';
import LoginButton from '../LoginButton';

describe('Login Tests', () => {
	it('S Login', () => {
		const div = document.createElement('div');
		ReactDOM.render(<LoginButton />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
