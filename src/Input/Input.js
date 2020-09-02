import React, { Component } from 'react';
import Context from '../Context';
import FormSelector from '../FormSelector/FormSelector';
import config from '../config';
import { duration } from 'moment';

const moment = require('moment');


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
      length: "",
      law_enforcment: "---",
      room_location: "---",
      major_disruption: "---",
      day_of_the_week: "---",
      student_injury: "---",
      staff_injury: "---",
      hold_1: "",
      hold_2: "",
      hold_3: "",
      hold_4: "",
      hold_5: "",
      holdError: "",
      secondsField: "",
      seconds: "",
      enteredHoldList: [],
      holdCount: 1,
      enteredPersonsList: [],
      formError: ""
    }    
  }

  static contextType = Context
  
  
  createHoldIncident = () => {
    document.getElementById('holdEntry').removeAttribute('hidden');
  }

  // Works but I need to reset the input fields 
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
    }
    console.log(this.state.holds_used);
    document.getElementById('enteredHolds').removeAttribute('hidden');

    if(!start_time || !stop_time || !length || holds_used === '---'){
      this.setState({holdError: 'All fields must be filled out'})
    }
    if(this.state.count > 5){
      this.setState({holdError: 'There is a maximum of five holds allowed'})
    }
    if(start_time > stop_time){
      this.setState({holdError: 'Start time must be before stop time'})
    }
    
    // Fetch POST request that returns the id of the newly created hold entry
    fetch(config.API_ENDPOINT + '/hold', {
      method: 'POST',
      body: JSON.stringify(newHold),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => { throw error })
      }
      return res.json()   
    })
    .then(this.settingHoldIds) 
  }

  settingHoldIds = (id) => {
    let count = this.state.holdCount
    let holdIdVariable = 'hold_' + count.toString();
    let newCount = count + 1
    console.log(this.state.holds_used);
    this.state.enteredHoldList.push(' ' + this.state.holds_used + ',');
    console.log(this.state.enteredHoldList)

    this.setState({[holdIdVariable]: id})
    this.setState({stop_time: ""})
    this.setState({start_time: ""})
    this.setState({length: ""})
    this.setState({holds_used: "---"})
    this.setState({holdCount: newCount})
    document.getElementById('holdEntry').value = '';
  }

  displayHolds = () => {
    return(
      <div>
        {this.state.enteredHoldList}
      </div>
    )
  }

  locationHandler = (event) => {
    let changes = 0;
    if(changes === 0){
      this.setState({school: event.target.value})
    }else{
      //code to confirm form change choice
    }
  }

  Select = (list, name, handler) => {
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

  // GET requests cannot have bodies but I need to pass at least two variables to verify
  studentCheck = () => {
    let newStudent = {
      marss: this.state.student_marss,
      student_last_name: this.state.student_Last_Name,
    }
    fetch(`${config.API_ENDPOINT}/studentcheck/${newStudent.marss}/${newStudent.student_last_name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          this.setState({formError: 'Student MARSS and/or Last Name Invalid'}) // This is needs to be a regular message displayed that interupts submission
        }
        return res.json()    
      })
      
  }

  day_of_the_weekHandler = (date) => {
    let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let weekday = daysOfTheWeek[date.getDay()];
    this.setState({day_of_the_week: weekday});
  }


  dateHandler = (newdate) => {this.setState({date: newdate})};

  // This function works I just need to interupt the subsequent function call if there is an error
  lengthHandler = () => {
    let seconds = this.state.seconds;
    let start = moment(this.state.start_time, "HH:mm");
    let stop = moment(this.state.stop_time, "HH:mm");
    let time = ""
    if(start > stop){
      this.setState({holdError: 'Start Time Must Be Before Stop Time'})
    }
    let duration = moment.duration(stop.diff(start));

    let minutes = duration.minutes();
    if([0,1,2,3,4,5,6,7,8,9].includes(minutes)){
      minutes = '0' + minutes.toString();
    };

    let hours = duration.hours();
    hours = hours.toString();
    time = hours + ':' + minutes + '.' + '00';

    if(time === '0:00.00'){
      document.getElementById('optionalSeconds').removeAttribute('hidden');
    }

    if(seconds){
      time = hours + ':' + minutes + '.' + seconds;
    }
    this.setState({length: time}, () => {this.addHold(); });       
  }

  boolConversion = (property) => {
    return (event) => {
      const { target: {value}} = event
      if(['true', 'false'].includes(value)){
        this.setState({[property]: value === "true"})
      }else{
        this.setState({[property]: '---'})
      }
    }
  }

  stateUpdate = (property) => {
    return (event) => {
      const { target: {value}} = event
      this.setState({[property]: value})
    }
  }

  involvedStaff = () => {
    let newStaff ={
      staff_name: this.state.people_involved
    }
    console.log(newStaff, this.state.people_involved)
    fetch(`${config.API_ENDPOINT}/staffcheck/${newStaff.staff_name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          this.setState({formError: 'Staff Name Not recognized'})
        }
        return res.json()
      })
      .then(this.addInvolvedPerson)
  }

  involvedStudent = () => {
    let firstName = this.state.people_involved.split(' ').slice(0,-1).join(' ');
    let lastName = this.state.people_involved.split(' ').slice(-1).join(' ');
    fetch(`${config.API_ENDPOINT}/involvedstudentcheck/${firstName}/${lastName}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          this.setState({formError:'Student Name Invalid'}) // This is needs to be a regular message displayed that interupts submission
        }
        return res.json()    
      })
      .then(this.addInvolvedPerson)
  }

  addInvolvedPerson = () => {
    this.state.enteredPersonsList.push(' ' + this.state.people_involved + ',')
    this.setState({people_involved: ""})    
  }

  displayInvolved = () => {
    return(
      <div>
        {this.state.enteredPersonsList}
      </div>
    )
  }

  submitterVerification = () => {
    let newStaff ={
      staff_name: this.state.staff_submitter
    }
    fetch(`${config.API_ENDPOINT}/staffcheck/${newStaff.staff_name}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok){
          this.setState({formError: 'Staff Name Not recognized'})
        }
        return res.json()
      })
      .then(this.emailVerification)
  }

  emailVerification = (email) => {
    if(this.state.submissionEmail !== email){
      this.setState({formError:'This email does not match the one on record'})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if( this.state.room_location === '---' || this.state.holds_used ==='---' || this.state.seclusion === '---' || this.state.reasonable_force === '---' || this.student_Injury === '---' || this.staff_Injury === '---' || this.law_enforcment === '---'){
      this.setState({formError: 'You must make a selection'})
    }

    this.studentCheck();
    this.submitterVerification();
    
    //More Data validation

    //Use staff validation on submitter and people involved
    // Fetch POST request to server

  }

    render(){
      // Do I need to pass the variables into context if I am updating them here?
        const value = {
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
          holdError: this.state.holdError,
          secondsField: this.state.secondsField,
          enteredHoldList: this.state.enteredHoldList,
          formError: this.state.formError,
          createHoldIncident: this.createHoldIncident,
          dateHandler: this.dateHandler,
          handleSubmit: this.handleSubmit,
          Select: this.Select,
          studentCheck: this.studentCheck,
          day_of_the_weekHandler: this.day_of_the_weekHandler,
          addHold: this.addHold,
          boolConversion: this.boolConversion,
          stateUpdate: this.stateUpdate ,
          lengthHandler: this.lengthHandler,
          displayHolds: this.displayHolds,
          involvedStaff: this.involvedStaff,
          involvedStudent: this.involvedStudent,
          displayInvolved: this.displayInvolved,

        }
        return(
          <Context.Provider value={value}>
            <div>
                <header>
                    <h1>Incident Report Form</h1>
                </header>
                <nav>
                    <label htmlFor="school">At which site did the Incident occur?</label>
                    <select id="school" name="school" onChange={this.locationHandler.bind(this)} value={this.state.value}>
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
                  school={this.state.school}
                  emailHandler={this.emailHandler}
                   />
                </main>
            </div>
          </Context.Provider>            
        )
    }
}