import React from 'react';
import ReactDOM from 'react-dom';
import LebanonForm from '../Forms/LebanonForm';
import Input from '../Input/Input';
import HandleChange from '../Forms/LebanonForm';
import HandleParentChange from '../Forms/LebanonForm';
import ClearInvolvedField from '../Forms/LebanonForm';
import ClearHoldField from '../Forms/LebanonForm';
import SchoolChanger from '../Forms/LebanonForm';
import ListConverter from '../Forms/LebanonForm';

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
