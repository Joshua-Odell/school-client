import React, { Component } from 'react';
import './output.css';

export default class Output extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schoolLocation: 'All',
			submissionEmail: 'True',
			submitterName: 'True',
			studentFirstName: 'True',
			studentLastName: 'True',
			grade: 'True',
			iepManager: 'True',
			involvedPeople: 'True',
			director: 'True',
			mars: 'True',
			contributingVariables: 'True',
			antecedent: 'True',
			disability: 'True',
			federal: 'True',
			age: 'True',
			raceEthnicity: 'True',
			gender: 'True',
			date: 'True',
			physicalHolding: 'True',
			seclusion: 'True',
			force: 'True',
			startTime: 'True',
			endTime: 'True',
			length: 'True',
			injury: 'True',
			lawEnforcment: 'True',
			program: 'True',
			roomlocation: 'True',
			disruption: 'True',
			isAdvancedOptionsVisible: false,
		};
		this.toggleHidden = this.toggleHidden.bind(this);
	}

	schoolLocation(event) {
		this.setState({ schoolLocation: event.target.value });
	}

	searchHandler(event) {
		//event.preventDefault()
		// fetch GET request to database
	}

	toggleHidden(event) {
		event.preventDefault();
		if (!this.isAdvancedOptionsVisible) {
			this.setState({ isAdvancedOptionsVisible: true });
		}

		// this.setState((state) => {
		//     console.log(state, !!this.state.isAdvancedOptionsVisible)
		//     return {
		//         ...state, isAdvancedOptionsVisible: !!state.isAdvancedOptionsVisible
		//     }

		// }  )
		//this.setState({isAdvancedOptionsVisible: !!this.state.isAdvancedOptionsVisible})
	}

	//I want to add checked as default state but when I do I cannot uncheck the box
	checkboxGenerator(variable, title) {
		return (
			<div>
				<label htmlFor={variable}>{title}</label>
				<input type="checkbox" id={variable} name={variable}></input>
			</div>
		);
	}

	render() {
		return (
			<div>
				<header>
					<h1>Data return</h1>
				</header>
				<main>What school would you like information about?</main>
				<label htmlFor="school">At which site did the Incident occur?</label>
				<select
					id="school"
					name="schoolLocation"
					onChange={this.schoolHandler}
					value={this.state.value}
				>
					<option value="All">All</option>
					<option value="Concord">Concord Education Center</option>
					<option value="Alliance">Alliance Education Center</option>
					<option value="Lebanon">Lebanon Education Center</option>
					<option value="Cedar">Cedar School?</option>
					<option value="program">programs?</option>
				</select>
				<form>
					<div>
						<label htmlFor="textMatch">Search for specific information</label>
						<input
							type="text"
							id="textMatch"
							name="textMatch"
							placeholder="An empty search field returns all results"
						/>
						<label htmlFor="fieldSearch">Matching Field</label>
						<select id="fieldSearch" name="fieldSearch">
							<option value="MARS_Number">MARS Number</option>
							<option value="SubmitterEmail">Submitter Email</option>
							<option value="SubmitterName">Submitter Name</option>
							<option value="Student Lastname">Student Last Name</option>
							<option value="Grade">Grade</option>
						</select>
					</div>
					<div id="advanced">
						{/* Need to figure out how to toggle hidden on Advance Settings */}
						<button id="advancedOptions" onClick={this.toggleHidden}>
							Advanced Options
						</button>
						{this.state.isAdvancedOptionsVisible && (
							<div id="advancedContent" className="advancedContent">
								{this.checkboxGenerator('submissionEmail', "Submitter's Email")}
								{this.checkboxGenerator('submissionName', "Submitter's Name")}
								{this.checkboxGenerator('studentName', "Student's Name")}
								{this.checkboxGenerator('grade', 'Grade')}
								{this.checkboxGenerator('iepManager', 'IEP Manager')}
								{this.checkboxGenerator('involvedPeople', 'Involved People')}
								{this.checkboxGenerator('director', "Director's Name")}
								{this.checkboxGenerator('mars', 'MARS Number')}
								{this.checkboxGenerator(
									'contributingVariables',
									'Contributing Variables'
								)}
								{this.checkboxGenerator('antecedant', 'Antecedent')}
								{this.checkboxGenerator('disability', 'Disability')}
								{this.checkboxGenerator('federal', 'Federal Setting')}
								{this.checkboxGenerator('age', 'Age')}
								{this.checkboxGenerator('raceEthnicity', 'Race/Ethnicity')}
								{this.checkboxGenerator('gender', 'Gender')}
								{this.checkboxGenerator('date', 'Date')}
								{this.checkboxGenerator('physicalHolding', "Hold's Used")}
								{this.checkboxGenerator('seclusion', 'Seclusion Used')}
								{this.checkboxGenerator('force', 'Force Used')}
								{this.checkboxGenerator('startTime', 'Start Time')}
								{this.checkboxGenerator('endTime', 'End Time')}
								{this.checkboxGenerator('length', 'Length')}
								{this.checkboxGenerator('injury', 'Injury')}
								{this.checkboxGenerator(
									'lawEnforcment',
									'Law Enforcment Involved'
								)}
								{this.checkboxGenerator('program', 'Program')}
								{this.checkboxGenerator('roomLocation', 'Room Location')}
								{this.checkboxGenerator('disruption', 'Disruption')}
							</div>
						)}
					</div>
					<div>
						<button onClick={this.searchHandler()}>Search</button>
					</div>
				</form>
				{/* <Toggle></Toggle> */}
			</div>
		);
	}
}

// function Toggle() {
//     const [isVisible, setIsVisible] = React.useState(false)
//     return (
//         <div>
//             <button onClick={ () => setIsVisible(!!isVisible)}>click</button>
//             {isVisible && (<p>is visible</p>)}
//         </div>
//     )
// }
