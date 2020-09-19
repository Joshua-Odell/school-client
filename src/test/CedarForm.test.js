import React from 'react';
import ReactDOM from 'react-dom';
import CedarForm from '../Forms/CedarForm';
import Input from '../Input/Input';
import HandleChange from '../Forms/CedarForm';
import HandleParentChange from '../Forms/CedarForm';
import ClearInvolvedField from '../Forms/CedarForm';
import ClearHoldField from '../Forms/CedarForm';
import SchoolChanger from '../Forms/CedarForm';
import ListConverter from '../Forms/CedarForm';

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
