import React from 'react';
import ReactDOM from 'react-dom';
import CedarForm from '../Forms/CedarForm';
import Input from '../Input/Input';

describe('Cedar Tests', () => {
	it('S Cedar', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<CedarForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
