import React, { Component } from 'react';
import Context from '../Context';
import FormSelector from '../FormSelector/FormSelector';
import config from '../config';

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const list = require('../Store/store');

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      school: "NONE",
      submissionEmail: "test",
      staff_submitter: "",
      student_Last_Name: "",
      student_marss: "",
      people_involved: "",
      contributing_variables: "",
      antecedent: "",
      date: "",
      holds_used: "---",
      seclusion: "---",
      reasonable_force: "---",
      start_time: "",
      stop_time: "",
      duration: "",
      law_enforcment: "---",
      room_location: "---",
      major_disruption: "---",
      day_of_the_week: "---",
      student_injury: "---",
      staff_injury: "---",
      multiple_holds: ""
    }
    this.dateHandler = this.dateHandler.bind(this);
    this.day_of_the_weekHandler = this.day_of_the_weekHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitterNameHandler = this.submitterNameHandler.bind(this);
    this.studentLastNameHandler = this.studentLastNameHandler.bind(this);
    this.marssHandler = this.marssHandler.bind(this);
    this.contributingVariablesHandler = this.contributingVariablesHandler.bind(this);
    this.antecedentHandler = this.antecedentHandler.bind(this);
    this.addHold = this.addHold.bind(this);
    this.startTimeHandler = this.startTimeHandler.bind(this);
    this.stopTimeHandler = this.stopTimeHandler.bind(this);
    this.physicalHoldingHandler = this.physicalHoldingHandler.bind(this);
    this.seclusionHandler = this.seclusionHandler.bind(this);
    this.forceHandler = this.forceHandler.bind(this);
    this.studentInjuryHandler = this.studentInjuryHandler.bind(this);
    this.staffInjuryHandler = this.staffInjuryHandler.bind(this);
    this.lawEnforcmentHandler = this.lawEnforcmentHandler.bind(this);
    this.roomlocationHandler = this.roomlocationHandler.bind(this);
    this.disruptionHandler = this.disruptionHandler.bind(this);
  }

  static contextType = Context
  
  addHold(){
    let holdIncident = (`<div>
    <div>
      <label htmlFor="startTime">Start Time (Hour:Minutes)</label>
      <input type="text" id="startTime" name="startTime" placeholder="12:00" />
    </div>
    <div>
      <label htmlFor="stopTime">stop Time (Hour:Minutes)</label>
      <input type="text" id="stopTime" name="stopTime" placeholder="12:00" />
    </div>
    <div>
      {this.context.Select(list.holds, 'Physical Holding')} 
    </div>
  </div>`)
  let result = this.state.multiple_holds + holdIncident;
  this.setState({multiple_holds: result})
  console.log(result)
    return(
      <div>
        <div>
          <label htmlFor="startTime">Start Time (Hour:Minutes)</label>
          <input type="time" id="startTime" name="startTime" placeholder="12:00" />
        </div>
        <div>
          <label htmlFor="stopTime">stop Time (Hour:Minutes)</label>
          <input type="time" id="stopTime" name="stopTime" placeholder="12:00" />
        </div>
        <div>
          {this.context.Select(list.holds, 'Physical Holding')} 
        </div>
      </div>
    )
  }

  locationHandler(event){
    let changes = 0;
    if(changes === 0){
      this.setState({schoolLocation: event.target.value})
      this.setState({school: this.state.schoolLocation})
    }else{
      //code to confirm form change choice
    }
  }

  Select(list, name, handler){
    // Need to figure out state change with these points
    const options = list.map((item) => {
      return(
        <option value={item}>{item}</option>
      )
    });
    return( 
      <div>
        <label htmlFor={name}>{name}</label>
        <select id={name} name={name} onChange={handler}>
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

  // I want to call this when both of the input fields are filled out 
  // However, I am having an issue with this
  // I have tried binding this at the top inside the functions and in the form
  day_of_the_weekHandler(date){
    let weekday = daysOfTheWeek[date.getDay()];
    this.setState({day_of_the_week: weekday});
  }

  emailHandler(event){this.setState({submissionEmail: event.target.value})}

  submitterNameHandler(event){this.setState({staff_submitter: event.target.value})}

  studentLastNameHandler(event){this.setState({student_Last_Name: event.target.value})}

  involvedPeopleHandler(event){this.setState({involvedPeople: event.target.value})}

  marssHandler(event){this.setState({student_marss: event.target.value})}

  contributingVariablesHandler(event){this.setState({contributing_variables: event.target.value})}

  antecedentHandler(event){this.setState({antecedent: event.target.value})}

  dateHandler(newdate){this.setState({date: newdate})};

  physicalHoldingHandler(event){this.setState({holds_used: event.target.value})}

  seclusionHandler(event){this.setState({seclusion: event.target.value})}

  forceHandler(event){this.setState({reasonable_force: event.target.value})}

  lengthHandler(){
    let duration = this.state.stop_time - this.state.startTime;
    this.setState({length: duration})
  }

  startTimeHandler(event){
    this.setState({start_time: event.target.value})
    if(this.state.stop_time){
      //this.lengthHandler().bind(this);
    }
  }

  stopTimeHandler(event){
    this.setState({stop_time: event.target.value})
    if(this.state.start_time){
      //this.lengthHandler().bind(this);
    }
  }  

  studentInjuryHandler(event){this.setState({student_injury: event.target.value})}

  staffInjuryHandler(event){this.setState({staff_injury: event.target.value})}

  lawEnforcmentHandler(event){
    console.log(event.target.value);
    if(event.target.value === "true"){
      this.setState({law_enforcment: true})
    }
    if(event.target.value === "false"){
      this.setState({law_enforcment: false})
    }else {
      this.setState({law_enforcment: '---'})
    }
    console.log(this.state.law_enforcment, typeof this.state.law_enforcment)    
  }

  roomlocationHandler(event){this.setState({room_location: event.target.value})}

  disruptionHandler(event){this.setState({major_disruption: event.target.value})}

  handleSubmit(event){
    event.preventDefault();
    //this.studentCheck();
    if( this.state.room_location === '---' || this.state.holds_used ==='---' || this.state.seclusion === '---' || this.state.reasonable_force === '---' || this.student_Injury === '---' || this.staff_Injury === '---' || this.law_enforcment === '---'){
      alert('You must make a selection')
    }
    //if() Check for '---' values and prevent submit if present
    // Fetch POST request to server
  }

    render(){
        const value = {
          schoolLocation: this.state.schoolLocation,
          submissionEmail: this.state.submissionEmail,
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
          lawEnforcment: this.state.law_enforcment,
          roomlocation: this.state.room_location,
          major_disruption: this.state.major_disruption,
          day_of_the_week: this.state.day_of_the_week,
          multiple_holds: this.state.multiple_holds,
          emailHandler: this.emailHandler,
          submitterNameHandler: this.submitterNameHandler,
          studentLastNameHandler: this.studentLastNameHandler,
          involvedPeopleHandler: this.involvedPeopleHandler,
          marssHandler: this.marssHandler,
          contributingVariablesHandler: this.contributingVariablesHandler,
          antecedentHandler: this.antecedentHandler,
          dateHandler: this.dateHandler,
          physicalHoldingHandler: this.physicalHoldingHandler,
          seclusionHandler: this.seclusionHandler,
          forceHandler: this.forceHandler,
          startTimeHandler: this.startTimeHandler,
          stopTimeHandler: this.stopTimeHandler,
          lengthHandler: this.lengthHandler,
          studentInjuryHandler: this.studentInjuryHandler,
          staffInjuryHandler: this.staffInjuryHandler,
          lawEnforcmentHandler: this.lawEnforcmentHandler,
          roomlocationHandler: this.roomlocationHandler,
          disruptionHandler: this.disruptionHandler,
          handleSubmit: this.handleSubmit,
          Select: this.Select,
          studentCheck: this.studentCheck,
          day_of_the_weekHandler: this.day_of_the_weekHandler,
          addHold: this.addHold 

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