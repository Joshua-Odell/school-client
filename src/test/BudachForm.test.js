import React from 'react';
import ReactDOM from 'react-dom';
import BudachForm from '../Forms/BudachForm';
import Input from '../Input/Input';

describe('Budach Tests', () => {
	it('S Budach', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<BudachForm />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
