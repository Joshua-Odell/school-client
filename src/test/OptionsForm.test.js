import React from 'react';
import ReactDOM from 'react-dom';
import OptionsForm from '../Forms/OptionsForm';
import Input from '../Input/Input';

describe('Options Tests', () => {
	it('S Options', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<OptionsForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
