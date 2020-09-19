import React from 'react';
import ReactDOM from 'react-dom';
import FormSelector from '../FormSelector/FormSelector';
import LocationHandler from '../FormSelector/FormSelector';

describe('FormSelector Tests', () => {
	it('S FormSelector', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FormSelector />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S LocationHandler', () => {
		const div = document.createElement('div');
		ReactDOM.render(<LocationHandler />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
