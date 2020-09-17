import React from 'react';
import ReactDOM from 'react-dom';
const expect = require('chai').expect;
const lengthHandler = require('../Input/Input');
import Input from '../Input/Input';

describe('Smoke Test with Input', () => {
	it('S Input', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Input />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
