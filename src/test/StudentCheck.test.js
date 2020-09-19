import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input/Input';
import StudentCheck from '../StudentCheck/StudentCheck';

describe('Smoke Test for StudentCheck', () => {
	it('S StudentCheck', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<StudentCheck />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
