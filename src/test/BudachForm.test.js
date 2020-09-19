import React from 'react';
import ReactDOM from 'react-dom';
import BudachForm from '../Forms/BudachForm';
import Input from '../Input/Input';
import HandleChange from '../Forms/BudachForm';
import HandleParentChange from '../Forms/BudachForm';
import ClearInvolvedField from '../Forms/BudachForm';
import ClearHoldField from '../Forms/BudachForm';
import SchoolChanger from '../Forms/BudachForm';
import ListConverter from '../Forms/BudachForm';

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
	it('S HandleChange', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<HandleChange />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S HandleParentChange', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<HandleParentChange />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S ClearInvolvedField', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<ClearInvolvedField />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S ClearHoldField', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<ClearHoldField />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S SchoolChanger', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<SchoolChanger />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S ListConverter', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<ListConverter />
			</Input>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
