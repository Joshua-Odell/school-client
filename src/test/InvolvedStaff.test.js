import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input/Input';
import InvolvedStaff from '../InvolvedStaff/InvolvedStaff';

describe('Smoke Test for InvovledStaff', () => {
	it('S InvolvedStaff', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<InvolvedStaff />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
