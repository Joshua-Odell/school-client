import React, { Component } from 'react';
import Context from './Context';
import { Route, Link } from 'react-router-dom';
import FormSelector from './FormSelector/FormSelector';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      schoolLocation: "NONE",
      submissionEmail: "test",
      submitterName: "",
      studentFirstName: "",
      studentLastName: "",
      garde: "",
      iepManager: "",
      involvedPeople: "",
      director: "",
      mars: "",
      contributingVariables: "",
      antecedent: "",
      disability: "",
      federal: "",
      age: "",
      raceEthnicity: "",
      gender: "",
      date: "",
      physicalHolding: "",
      seclusion: "",
      force: "",
      startTime: "",
      endTime: "",
      length: "",
      injury: "",
      lawEnforcment: "",
      program: "",
      roomlocation: "",
      disruption: ""
    }
  }

  static contextType = Context  

  locationHandler(event){
    let changes = 0;
    if(changes === 0){
      this.setState({schoolLocation: event.target.value})
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

  emailHandler(event){this.setState({submissionEmail: event.target.value})}

  submitterNameHandler(event){this.setState({submitterName: event.target.value})}

  studentFirstNameHandler(event){this.setState({studentFirstName: event.target.value})}

  studentLastNameHandler(event){this.setState({studentLastName: event.target.value})}

  studentGradeHandler(event){this.setState({studentGrade: event.target.value})}

  iepManagerHandler(event){this.setState({iepManager: event.target.value})}

  involvedPeopleHandler(event){this.setState({involvedPeople: event.target.value})}

  directorHandler(event){this.setState({director: event.target.value})}

  marsHandler(event){this.setState({mars: event.target.value})}

  contributingVariablesHandler(event){this.setState({contributingVariables: event.target.value})}

  antecedentHandler(event){this.setState({antecedent: event.target.value})}

  disabilityHandler(event){this.setState({disability: event.target.value})}

  federalHandler(event){this.setState({federal: event.target.value})}

  ageHandler(event){this.setState({age: event.target.value})}

  raceEthnicityHandler(event){this.setState({raceEthnicity: event.target.value})}

  genderHandler(event){this.setState({gender: event.target.value})}

  dateHandler(event){this.setState({dateHandler: event.target.value})}

  physicalHoldingHandler(event){this.setState({physicalHolding: event.target.value})}

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
    event.preventDefault()
    alert(this.state.submissionEmail);
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
          mars: this.state.mars,
          contributingVariables: this.state.contributingVariables,
          antecedent: this.state.antecedent,
          disability: this.state.disability,
          federal: this.state.federal,
          age: this.state.age,
          raceEthnicity: this.state.raceEthnicity,
          gender: this.state.gender,
          date: this.state.date,
          physicalHolding: this.state.physicalHolding,
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
          marsHandler: this.marsHandler,
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
          Select: this.Select

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