import React from 'react';
import ReactDOM from 'react-dom';
import DHHProgramsForm from '../Forms/DHHProgramsForm';
import Input from '../Input/Input';

describe('DHH Tests', () => {
	it('S DHH', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<DHHProgramsForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
