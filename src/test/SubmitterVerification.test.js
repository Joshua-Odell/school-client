import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input/Input';
import SubmitterVerification from '../SubmitterVerification/SubmitterVerification';
import EmailVerification from '../SubmitterVerification/SubmitterVerification';

describe('Smoke Test for SubmitterVerification', () => {
	it('S SubmitterVerification', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<SubmitterVerification />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S EmailVerification', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<EmailVerification />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
