import React from 'react';
import ReactDOM from 'react-dom';
import AllianceForm from '../Forms/AllianceForm';
import Input from '../Input/Input';

describe('Alliance Tests', () => {
	it('S Alliance', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<AllianceForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
