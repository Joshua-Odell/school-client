import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../Input/Input';
import LengthHandler from '../Input/Input';
import CreateHoldIncident from '../Input/Input';
import CreateSeclusionHoldIncident from '../Input/Input';
import CreateForceHoldIncident from '../Input/Input';
import AddHold from '../Input/Input';
import SettingHoldIds from '../Input/Input';
import DayOfTheWeekHandler from '../Input/Input';
import Select from '../Input/Input';
import BoolConversion from '../Input/Input';
import StateGeneralUpdate from '../Input/Input';
import StateUpdate from '../Input/Input';
import FormError from '../Input/Input';
import AddInvolvedPerson from '../Input/Input';
import HandleSubmit from '../Input/Input';
import FinalPostRequest from '../Input/Input';
import GeneratePDF from '../Input/Input';
import FinalDataPreperation from '../Input/Input';
import ApproverAssignment from '../Input/Input';
import SchoolConversion from '../Input/Input';
import RenderForm from '../Input/Input';

describe('Smoke Test with Input', () => {
	it('S Input', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Input />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S LengthHandler', () => {
		const div = document.createElement('div');
		ReactDOM.render(<LengthHandler />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S CreateHoldIncident', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CreateHoldIncident />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S CreateSeclusionHoldIncident', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CreateSeclusionHoldIncident />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S CreateForceHoldIncident', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CreateForceHoldIncident />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S AddHold', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AddHold />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S SettingHoldIds', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SettingHoldIds />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S DayOfTheWeekHandler', () => {
		const div = document.createElement('div');
		ReactDOM.render(<DayOfTheWeekHandler />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S Select', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Select />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S BoolConversion', () => {
		const div = document.createElement('div');
		ReactDOM.render(<BoolConversion />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S StateGeneralUpdate', () => {
		const div = document.createElement('div');
		ReactDOM.render(<StateGeneralUpdate />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S StateUpdate', () => {
		const div = document.createElement('div');
		ReactDOM.render(<StateUpdate />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S FormError', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FormError />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S AddInvolvedPerson', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AddInvolvedPerson />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S HandleSubmit', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HandleSubmit />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S FinalPostRequest', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FinalPostRequest />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S GeneratePDF', () => {
		const div = document.createElement('div');
		ReactDOM.render(<GeneratePDF />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S FinalDataPreperation', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FinalDataPreperation />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S ApproverAssignment', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ApproverAssignment />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S SchoolConversion', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SchoolConversion />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('S RenderForm', () => {
		const div = document.createElement('div');
		ReactDOM.render(<RenderForm />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
