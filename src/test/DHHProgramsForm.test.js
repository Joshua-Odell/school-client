import React from 'react';
import ReactDOM from 'react-dom';
import DHHProgramsForm from '../Forms/DHHProgramsForm';
import Input from '../Input/Input';
import HandleChange from '../Forms/DHHProgramsForm';
import HandleParentChange from '../Forms/DHHProgramsForm';
import ClearInvolvedField from '../Forms/DHHProgramsForm';
import ClearHoldField from '../Forms/DHHProgramsForm';
import SchoolChanger from '../Forms/DHHProgramsForm';
import ListConverter from '../Forms/DHHProgramsForm';

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
