import React from 'react';
import ReactDOM from 'react-dom';
import ApproverPage from '../Approver/ApproverPage';

describe('ApproverPage Tests', () => {
	it('S ApproverPage', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ApproverPage />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
