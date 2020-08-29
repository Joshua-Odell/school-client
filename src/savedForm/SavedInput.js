import React, { Component } from 'react';
import Context from '../Context';
import FormSelector from '../FormSelector/FormSelector';
import config from '../config';

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      school: "NONE",
      submissionEmail: "test",
      staff_submitter: "",
      studentFirstName: "",
      studentLastName: "",
      grade: "",
      iepManager: "",
      people_involved: "",
      director: "",
      student_marss: "",
      contributing_variables: "",
      antecedent: "",
      disability: "",
      federal: "",
      age: "",
      raceEthnicity: "",
      gender: "",
      date: "",
      holds_used: "---",
      seclusion: "",
      reasonable_force: "",
      start_time: "",
      stop_ime: "",
      duration: "",
      injury: "",
      law_enforcment: "",
      program: "",
      room_location: "---",
      major_disruption: "---",
      day_of_the_week: "---",
      student_injury: "",
      staff_injury: ""
    }
  }

  static contextType = Context  

  locationHandler(event){
    let changes = 0;
    if(changes === 0){
      this.setState({schoolLocation: event.target.value})
      this.setState({school: this.state.schoolLocation})
    }else{
      //code to confirm form change choice
    }
  }

  Select(list, name){
    // Need to figure out state change with these points
    const options = list.map((item) => {
      return(
        <option value={item}>{item}</option>
      )
    });
    return( 
      <div>
        <label htmlFor={name}>{name}</label>
        <select id={name} name={name}>
          {options}
        </select>
      </div>
     );
  }

  studentCheck(){
    fetch(`${config.API_ENDPOINT}/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => {
        if (!res.ok)
          alert('Student MARSS and/or Last Name Invalid')
      })
  }

  emailHandler(event){this.setState({submissionEmail: event.target.value})}

  submitterNameHandler(event){this.setState({submitterName: event.target.value})}

  studentFirstNameHandler(event){this.setState({studentFirstName: event.target.value})}

  studentLastNameHandler(event){this.setState({studentLastName: event.target.value})}

  studentGradeHandler(event){this.setState({grade: event.target.value})}

  iepManagerHandler(event){this.setState({iepManager: event.target.value})}

  involvedPeopleHandler(event){this.setState({involvedPeople: event.target.value})}

  directorHandler(event){this.setState({director: event.target.value})}

  marssHandler(event){this.setState({marss: event.target.value})}

  contributingVariablesHandler(event){this.setState({contributingVariables: event.target.value})}

  antecedentHandler(event){this.setState({antecedent: event.target.value})}

  disabilityHandler(event){this.setState({disability: event.target.value})}

  federalHandler(event){this.setState({federal: event.target.value})}

  ageHandler(event){this.setState({age: event.target.value})}

  raceEthnicityHandler(event){this.setState({raceEthnicity: event.target.value})}

  genderHandler(event){this.setState({gender: event.target.value})}

  dateHandler(event){this.setState({dateHandler: event.target.value})}

  physicalHoldingHandler(event){this.setState({holds_used: event.target.value})}

  seclusionHandler(event){this.setState({seclusion: event.target.value})}

  forceHandler(event){this.setState({forceHandler: event.target.value})}

  startTimeHandler(event){this.setState({startTime: event.target.value})}

  endTimeHandler(event){this.setState({endTime: event.target.value})}

  lengthHandler(event){this.setState({length: event.target.value})}

  injuryHandler(event){this.setState({injury: event.target.value})}

  lawEnforcmentHandler(event){this.setState({lawEnforcment: event.target.value})}

  programHandler(event){this.setState({program: event.target.value})}

  roomlocationHandler(event){this.setState({roomlocation: event.target.value})}

  disruptionHandler(event){this.setState({disruption: event.target.value})}

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.major_disruption)
    //this.studentCheck();
    if(this.state.major_disruption === '---' || this.state.roomlocation === '---' || this.state.day_of_the_week === '---' || this.state.holds ==='---'){
      alert('You must make a selection')
    }
    //if() Check for '---' values and prevent submit if present
    // Fetch POST request to server
  }

    render(){
        const value = {
          schoolLocation: this.state.schoolLocation,
          submissionEmail: this.state.submissionEmail,
          submitterName: this.state.submitterName,
          studentFirstName: this.state.studentFirstName,
          studentLastName: this.state.studentLastName,
          garde: this.state.garde,
          iepManager: this.state.iepManager,
          involvedPeople: this.state.involvedPeople,
          director: this.state.director,
          marss: this.state.marss,
          contributingVariables: this.state.contributingVariables,
          antecedent: this.state.antecedent,
          disability: this.state.disability,
          federal: this.state.federal,
          age: this.state.age,
          raceEthnicity: this.state.raceEthnicity,
          gender: this.state.gender,
          date: this.state.date,
          holds_used: this.state.holds_used,
          seclusion: this.state.seclusion,
          force: this.state.force,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          length: this.state.length,
          injury: this.state.injury,
          lawEnforcment: this.state.lawEnforcment,
          program: this.state.program,
          roomlocation: this.state.roomlocation,
          disruption: this.state.disruption,
          emailHandler: this.emailHandler,
          submitterNameHandler: this.submitterNameHandler,
          studentFirstNameHandler: this.studentFirstNameHandler,
          studentLastNameHandler: this.studentLastNameHandler,
          studentGradeHandler: this.studentGradeHandler,
          iepManagerHandler: this.iepManagerHandler,
          involvedPeopleHandler: this.involvedPeopleHandler,
          directorHandler: this.directorHandler,
          marssHandler: this.marssHandler,
          contributingVariablesHandler: this.contributingVariablesHandler,
          antecedentHandler: this.antecedentHandler,
          disabilityHandler: this.disabilityHandler,
          federalHandler: this.federalHandler,
          ageHandler: this.ageHandler,
          raceEthnicityHandler: this.raceEthnicityHandler,
          genderHandler: this.genderHandler,
          dateHandler: this.dateHandler,
          physicalHoldingHandler: this.physicalHoldingHandler,
          seclusionHandler: this.seclusionHandler,
          forceHandler: this.forceHandler,
          startTimeHandler: this.startTimeHandler,
          endTimeHandler: this.endTimeHandler,
          lengthHandler: this.lengthHandler,
          injuryHandler: this.injuryHandler,
          lawEnforcmentHandler: this.lawEnforcmentHandler,
          programHandler: this.programHandler,
          roomlocationHandler: this.roomlocationHandler,
          disruptionHandler: this.disruptionHandler,
          handleSubmit: this.handleSubmit,
          Select: this.Select,
          studentCheck: this.studentCheck 

        }
        return(
          <Context.Provider value={value}>
            <div>
                <header>
                    <h1>Incident Report Form</h1>
                </header>
                <nav>
                    <label htmlFor="school">At which site did the Incident occur?</label>
                    <select id="school" name="schoolLocation" onChange={this.locationHandler.bind(this)} value={this.state.value}>
                        <option value="NONE">--NONE--</option>
                        <option value="Concord">Concord Education Center</option>
                        <option value="Alliance">Alliance Education Center</option>
                        <option value="Lebanon">Lebanon Education Center</option>
                        <option value="Cedar">Cedar School?</option>
                        <option value="program">programs?</option>
                    </select>
                </nav>
                <main>
                  <FormSelector 
                  schoolLocation={this.state.schoolLocation}
                  emailHandler={this.emailHandler}
                   />
                </main>
            </div>
          </Context.Provider>            
        )
    }
}