import React from 'react';
import ReactDOM from 'react-dom';
import AllianceForm from '../Forms/AllianceForm';
import Input from '../Input/Input';
import HandleChange from '../Forms/AllianceForm';
import HandleParentChange from '../Forms/AllianceForm';
import ClearInvolvedField from '../Forms/AllianceForm';
import ClearHoldField from '../Forms/AllianceForm';
import SchoolChanger from '../Forms/AllianceForm';
import ListConverter from '../Forms/AllianceForm';

describe('Alliance Tests', () => {
	it('S Alliance', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Input>
				<AllianceForm />
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
