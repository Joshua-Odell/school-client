import React from 'react';
import ReactDOM from 'react-dom';
import LebanonForm from '../Forms/LebanonForm';
import Input from '../Input/Input';

describe('Lebanon Tests', () => {
	it('S Lebanon', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<LebanonForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
