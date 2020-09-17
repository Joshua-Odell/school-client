import React from 'react';
import ReactDOM from 'react-dom';
import Completed from '../Forms/Completed';

describe('Completed Tests', () => {
	it('S Completed', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Completed />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
