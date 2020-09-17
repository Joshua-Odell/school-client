import React, { Component } from 'react';
import Context from '../Context';
import config from '../config';
import ConcordForm from '../Forms/ConcordForm';
import CedarForm from '../Forms/CedarForm';
import AllianceForm from '../Forms/AllianceForm';
import LebanonForm from '../Forms/LebanonForm';
import BudachForm from '../Forms/BudachForm';
import studentCheck from '../studentCheck/studentCheck';
import submitterVerification from '../submitterVerification/submitterVerification';
import Completed from '../Forms/Completed';

import './Input.css';
import DHHProgramsForm from '../Forms/DHHProgramsForm';
import OptionsForm from '../Forms/OptionsForm';

const moment = require('moment');

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submissionEmail: 'test',
			staff_submitter: '',
			student_Last_Name: '',
			student_marss: '',
			schoolId: null,
			people_involved: '',
			contributing_variables: '',
			antecedent: '',
			date: new Date(),
			holds_used: '---',
			seclusion: '---',
			reasonable_force: '---',
			start_time: '',
			stop_time: '',
			length: '',
			law_enforcement: '---',
			room_location: '---',
			major_disruption: [],
			day_of_the_week: '---',
			behavior_type: [],
			narrative: '',
			administration: null,
			parent: null,
			parent_notification_time: '',
			parent_notification_date: new Date(),
			parent_problem_solving: null,
			parent_right: null,
			iep_meeting: null,
			student_debriefing: null,
			staff_debriefing: null,
			student_injury: '---',
			staff_injury: '---',
			hold_1: null,
			hold_2: null,
			hold_3: null,
			hold_4: null,
			hold_5: null,
			holdError: '',
			secondsField: '',
			seconds: '',
			enteredHoldList: [],
			holdCount: 1,
			enteredPersonsList: [],
			formError: '',
			approver: '',
		};
	}

	static contextType = Context;

	componentWillMount() {
		this.day_of_the_weekHandler(this.state.date);
	}

	//HOLD FUNCTIONS
	lengthHandler = () => {
		let seconds = this.state.seconds;
		let start = moment(this.state.start_time, 'HH:mm');
		let stop = moment(this.state.stop_time, 'HH:mm');
		let time = '';
		if (start > stop) {
			this.setState({ holdError: 'Start Time Must Be Before Stop Time' });
		}
		let duration = moment.duration(stop.diff(start));

		let minutes = duration.minutes();
		if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(minutes)) {
			minutes = '0' + minutes.toString();
		}

		let hours = duration.hours();
		hours = hours.toString();
		time = hours + ':' + minutes + '.' + '00';

		if (time === '0:00.00') {
			document.getElementById('optionalSeconds').removeAttribute('hidden');
		}

		if (seconds) {
			time = hours + ':' + minutes + '.' + seconds;
		}
		this.setState({ length: time }, () => {
			this.addHold();
		});
	};

	createHoldIncident = (event) => {
		document.getElementById('holdEntry').removeAttribute('hidden');
	};

	createSeclusionHoldIncident = (event) => {
		if (this.state.seclusion === true) {
			document.getElementById('seclusionHold').removeAttribute('hidden');
		}
	};

	createForceHoldIncident = (event) => {
		if (
			this.state.reasonable_force === 'Non-PCM Hold' ||
			this.state.reasonable_force === 'Unlicensed Seclusion'
		) {
			document.getElementById('reasonableForceHold').removeAttribute('hidden');
		}
	};

	addHold = () => {
		let start_time = this.state.start_time;
		let stop_time = this.state.stop_time;
		let length = this.state.length;
		let holds_used = this.state.holds_used;

		let newHold = {
			hold_type: holds_used,
			start_time: start_time,
			stop_time: stop_time,
			duration: length,
		};

		document.getElementById('enteredHolds').style.visibility = 'visible';

		if (
			this.state.reasonable_force === 'Non-PCM Hold' ||
			this.state.reasonable_force === 'Unlicensed Seclusion'
		) {
			newHold.hold_type = this.state.reasonable_force;
		} else if (this.state.seclusion) {
			newHold.hold_type = 'seclusion';
		}

		if (holds_used === '---' && !this.state.seclusion) {
			this.setState({ holdError: 'All fields must be filled out' });
		}
		if (this.state.count > 5) {
			this.setState({ holdError: 'There is a maximum of five holds allowed' });
		}
		if (start_time > stop_time) {
			this.setState({ holdError: 'Start time must be before stop time' });
		}

		// Fetch POST request that returns the id of the newly created hold entry
		fetch(config.API_ENDPOINT + '/hold', {
			method: 'POST',
			body: JSON.stringify(newHold),
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error;
					});
				}
				return res.json();
			})
			.then(this.settingHoldIds);
	};

	settingHoldIds = (id) => {
		let count = this.state.holdCount;
		let holdIdVariable = 'hold_' + count.toString();
		let newCount = count + 1;

		if (
			this.state.reasonable_force === 'Non-PCM Hold' ||
			this.state.reasonable_force === 'Unlicensed Seclusion'
		) {
			this.state.enteredHoldList.push(this.state.reasonable_force);
		} else if (this.state.seclusion === true) {
			this.state.enteredHoldList.push('Seclusion');
		} else {
			this.state.enteredHoldList.push(this.state.holds_used);
		}

		this.setState({ [holdIdVariable]: id });
		this.setState({ stop_time: '' });
		this.setState({ start_time: '' });
		this.setState({ length: '' });
		this.setState({ holdCount: newCount });
		document.getElementById('holdEntry').value = '';
	};

	// Takes the date and converts it to a day of the week string
	day_of_the_weekHandler = (date) => {
		let daysOfTheWeek = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		let weekday = daysOfTheWeek[date.getDay()];
		this.setState({ day_of_the_week: weekday });
	};

	//A function used to generate multiple different types of selection html elements
	Select = (list, name, handler, multiple) => {
		const options = list.map((item) => {
			return <option value={item}>{item}</option>;
		});
		if (!multiple) {
			return (
				<div>
					<label htmlFor={name}>{name}</label>
					<select id={name} name={name} onChange={handler}>
						{options}
					</select>
				</div>
			);
		} else {
			return (
				<div>
					<label htmlFor={name}>{name}</label>
					<select id={name} name={name} onChange={handler} multiple>
						{options}
					</select>
				</div>
			);
		}
	};

	// takes the strings returned from bianary drop down lists and converts the results to a bool
	boolConversion = (property) => {
		return (event) => {
			const {
				target: { value },
			} = event;
			if (['true', 'false'].includes(value)) {
				this.setState({ [property]: value === 'true' }, () => {
					this.createSeclusionHoldIncident();
				});
			} else {
				this.setState({ [property]: '---' });
			}
		};
	};

	// A state Update function that is very broad in order to be used as a multipurpose callback function
	stateGeneralUpdate = (property, value) => {
		this.setState({ [property]: [value] });
	};

	//A state update function used primarily by the forms select and options components
	stateUpdate = (property, multiple) => {
		let result = this.state[property];
		return (event) => {
			const {
				target: { value },
			} = event;
			if (multiple) {
				result.push(value);
				this.setState({ [property]: result });
			} else {
				this.setState({ [property]: value }, () => {
					this.createForceHoldIncident();
				});
			}
		};
	};

	// An all purpose error handler that sets an error class on the relevant field and can set a message
	formError = (property) => {
		if (property === 'involvedPeople' || property === 'reporter') {
			this.setState({ formError: 'Staff Name Not recognized' });
		} else if (property === 'email') {
			this.setState({
				formError: 'This email does not match the one on record',
			});
		} else if (property === 'marssNumber' || property === 'studentLastName') {
			this.setState({ formError: 'Student MARSS and/or Last Name Invalid' });
		}
		document.getElementById([property]).classList.add('fieldError');
	};

	//This function is called by the Involved Person validator. This is kept here for simplicity sake with the push order complicating calling back to change state.
	addInvolvedPerson = () => {
		this.state.enteredPersonsList.push(this.state.people_involved);
		this.setState({ people_involved: '' });
	};

	//Does an initial check to ensure no critical fields are left blank then passes on to finalPostRequest
	handleSubmit = (event) => {
		event.preventDefault();

		if (
			this.state.room_location === '---' ||
			this.state.seclusion === '---' ||
			this.state.reasonable_force === '---' ||
			this.student_Injury === '---' ||
			this.staff_Injury === '---' ||
			this.law_enforcement === '---'
		) {
			this.setState({ formError: 'You must make a selection' });
		}
		this.finalPostRequest();
	};

	// Takes the forms states and formats a post request to add the incident to the database
	finalPostRequest = async () => {
		await this.finalDataPreperation();
		if (this.state.formError === '') {
			let newIncident = {
				student_marss: this.state.student_marss,
				staff_submitter: this.state.staff_submitter,
				school: this.state.schoolId,
				date: this.state.date,
				day_of_the_week: this.state.day_of_the_week,
				behavior_type: this.state.behavior_type,
				narrative: this.state.narrative,
				administration: this.state.administration,
				parent: this.state.parent,
				parent_notification_time: this.state.parent_notification_time,
				parent_notification_date: this.state.parent_notification_date,
				parent_problem_solving: this.state.parent_problem_solving,
				parent_right: this.state.parent_right,
				iep_meeting: this.state.iep_meeting,
				student_debriefing: this.state.student_debriefing,
				staff_debriefing: this.state.staff_debriefing,
				seclusion: this.state.seclusion,
				reasonable_force: this.state.reasonable_force,
				student_injury: this.state.student_injury,
				staff_injury: this.state.staff_injury,
				law_enforcement: this.state.law_enforcement,
				room_location: this.state.room_location,
				hold_1: this.state.hold_1,
				hold_2: this.state.hold_2,
				hold_3: this.state.hold_3,
				hold_4: this.state.hold_4,
				hold_5: this.state.hold_5,
				antecedent: this.state.antecedent,
				contributing_variables: this.state.contributing_variables,
				people_involved: this.state.enteredPersonsList,
				major_disruption: this.state.major_disruption,
				approver: this.state.approver,
			};
			fetch(`${config.API_ENDPOINT}`, {
				method: 'POST',
				body: JSON.stringify(newIncident),
				headers: {
					'content-type': 'application/json',
				},
			})
				.then((res) => {
					if (!res.ok) {
						return res.json().then((error) => {
							throw error;
						});
					}
					return res.json();
				})
				.then((data) => this.generatePDF(data))
				.then(this.setState({ completed: true }));
		}
	};

	//Ran after sucessfull submission generating a unique pdf for each individual incident
	generatePDF = (id) => {
		fetch(`${config.API_ENDPOINT}/pdf/${id}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		}).then((res) => {
			if (!res.ok) {
				return res.json().then((error) => {
					throw error;
				});
			}
			return res.json();
		});
	};

	// runs the functions that check that the staff and students are valid along with assigning the approvers
	finalDataPreperation = async () => {
		await submitterVerification(
			this.state.staff_submitter,
			this.state.submissionEmail,
			this.formError
		);
		await studentCheck(
			this.state.student_marss,
			this.state.student_Last_Name,
			this.formError
		);
		await this.approverAssignment();
		await this.schoolConversion();
	};

	//sets the correct approver for each school
	approverAssignment = async () => {
		if (this.props.school === 'Concord') {
			this.setState({ approver: 1 });
		}
	};

	//changes the name to the relevant school ID, Ideal because school is used to display the school name prior to submission
	schoolConversion = async () => {
		if (this.props.school === 'Concord') {
			this.setState({ schoolId: 1 });
		}
	};

	//Takes The school Prop that is sent from FormSelector and displays the relevant Form
	renderForm = () => {
		if (this.state.completed) {
			return <Completed />;
		} else if (this.props.school === 'NONE') {
			return (
				<div>
					<div>Please Select Your Location</div>
					<div id="description">
						<h2>Behavior Log</h2>
						<p>
							This application will allow for minimal repetition when logging
							incidents while increase the quality of those reports.
						</p>
						<h3>The process</h3>
						<ul>
							<li>
								The submitter selects their school giving them a custom form
								with location specific information
							</li>
							<li>
								While inputing data several checks are occuring to make sure
								that the student and staff are validated with the database
							</li>
							<li>
								The form uses the database to get repetative data. This means
								that information such as demographics do not need to be entered
								everytime the student has an incident
							</li>
							<li>
								The form uses inputed choices to display the relevant fields.
								This reduces the time spent interacting with irrelevant fields.
							</li>
							<li>
								The displays for the hold inputs and involved person inputs give
								confidence to the submitter about the accuracy of their report.
							</li>
							<li>
								Upon submission final validations occur before sending the
								incident to the database.
							</li>
							<li>
								When the incident has been sucessfully added to the database
								this program generates a unique PDF Incident Report for each
								incident.
							</li>
							<li>
								That PDF is then sent to the designated approver for review
								along with a link to either approve or return the incident with
								comments.
							</li>
							<li>
								Upon acceptance of each new incident a CSV file is automatically
								updated this file is then used to produce up to the moment data
								returns.
							</li>
							<li>The data return only returns accepted incidents.</li>
						</ul>
					</div>
				</div>
			);
		} else if (this.props.school === 'Concord') {
			return <ConcordForm school={this.props.school} />;
		} else if (this.props.school === 'AEC') {
			return <AllianceForm school={this.props.school} />;
		} else if (this.props.school === 'TEA (ECSE LEC)') {
			return <LebanonForm school={this.props.school} />;
		} else if (this.props.school === 'Cedar') {
			return <CedarForm school={this.props.school} />;
		} else if (this.props.school === 'Budach') {
			return <BudachForm school={this.props.school} />;
		} else if (this.props.school === 'DHH') {
			return <DHHProgramsForm school={this.props.school} />;
		} else if (this.props.school === 'Options') {
			return <OptionsForm school={this.props.school} />;
		} else {
			return null;
		}
	};

	render() {
		const value = {
			submissionEmail: this.state.submissionEmail,
			school: this.props.school,
			submitterName: this.state.staff_submitter,
			studentLastName: this.state.student_Last_Name,
			involvedPeople: this.state.involvedPeople,
			marss: this.state.student_marss,
			contributingVariables: this.state.contributing_variables,
			antecedent: this.state.antecedent,
			date: this.state.date,
			holds_used: this.state.holds_used,
			seclusion: this.state.seclusion,
			force: this.state.reasonable_force,
			startTime: this.state.start_time,
			stopTime: this.state.stop_time,
			length: this.state.length,
			studentInjury: this.state.student_injury,
			staffInjury: this.state.staff_injury,
			lawEnforcment: this.state.law_enforcement,
			roomlocation: this.state.room_location,
			major_disruption: this.state.major_disruption,
			day_of_the_week: this.state.day_of_the_week,
			multiple_holds: this.state.multiple_holds,
			holdError: this.state.holdError,
			secondsField: this.state.secondsField,
			enteredHoldList: this.state.enteredHoldList,
			formError: this.state.formError,
			enteredPersonsList: this.state.enteredPersonsList,
			people_involved: this.state.people_involved,
			createHoldIncident: this.createHoldIncident,
			handleSubmit: this.handleSubmit,
			Select: this.Select,
			day_of_the_weekHandler: this.day_of_the_weekHandler,
			addHold: this.addHold,
			boolConversion: this.boolConversion,
			stateUpdate: this.stateUpdate,
			lengthHandler: this.lengthHandler,
			createSeclusionHoldIncident: this.createSeclusionHoldIncident,
			stateGeneralUpdate: this.stateGeneralUpdate,
			addInvolvedPerson: this.addInvolvedPerson,
		};
		return (
			<Context.Provider value={value}>
				<div>{this.renderForm()}</div>
			</Context.Provider>
		);
	}
}
