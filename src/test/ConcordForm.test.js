import React from 'react';
import ReactDOM from 'react-dom';
import ConcordForm from '../Forms/ConcordForm';
import Input from '../Input/Input';

describe('Concord Tests', () => {
	it('S Concord', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<ConcordForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
