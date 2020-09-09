import React, { Component } from 'react';
import Context from '../Context';
import FormSelector from '../FormSelector/FormSelector';
import config from '../config';
import ConcordForm from '../Forms/ConcordForm';
import CedarForm from '../Forms/CedarForm';
import { duration } from 'moment';

const moment = require('moment');
const list = require('../Store/store');

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      submissionEmail: "test",
      staff_submitter: "",
      student_Last_Name: "",
      student_marss: "",
      people_involved: "",
      contributing_variables: "",
      antecedent: "",
      date: new Date (),
      holds_used: "---",
      seclusion: "---",
      reasonable_force: "---",
      start_time: "",
      stop_time: "",
      length: "",
      law_enforcement: "---",
      room_location: "---",
      major_disruption: [],
      day_of_the_week: "---",
      behavior_type: [],
      narrative: "",
      administration: null,
      parent: null,
      parent_notification_time: "",
      parent_notification_date: new Date (),
      parent_problem_solving: null,
      parent_right: null,
      iep_meeting: null,
      student_debriefing: null,
      staff_debriefing: null,
      student_injury: "---",
      staff_injury: "---",
      hold_1: null,
      hold_2: null,
      hold_3: null,
      hold_4: null,
      hold_5: null,
      holdError: "",
      secondsField: "",
      seconds: "",
      enteredHoldList: [],
      holdCount: 1,
      enteredPersonsList: [],
      formError: "",
      approver: "",
    }    
  }

  static contextType = Context


  
  componentWillMount(){
    this.day_of_the_weekHandler(this.state.date);
  }

  //HOLD FUNCTIONS

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

  createHoldIncident = () => {
    document.getElementById('holdEntry').removeAttribute('hidden');
  }

  createSeclusionHoldIncident = () => {
    if(this.state.seclusion === true){
      document.getElementById('seclusionHold').removeAttribute('hidden');
    }
  }

  createForceHoldIncident = () => {
    if(this.state.reasonable_force === 'Non-PCM Hold' || this.state.reasonable_force === 'Unlicensed Seclusion'){
      document.getElementById('reasonableForceHold').removeAttribute('hidden');
    }
  }

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

    document.getElementById('enteredHolds').removeAttribute('hidden');

    if(this.state.reasonable_force === "Non-PCM Hold" || this.state.reasonable_force === "Unlicensed Seclusion"){
      newHold.hold_type = this.state.reasonable_force
    }
    else if(this.state.seclusion){
      newHold.hold_type = 'seclusion'
    }

    if(holds_used === '---' && !this.state.seclusion){
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
    let regularHold = ' ' + this.state.holds_used + ','
    
    if(this.state.reasonable_force === "Non-PCM Hold" || this.state.reasonable_force === "Unlicensed Seclusion"){
      this.state.enteredHoldList.push(' ' + this.state.reasonable_force + ',');
    }
    else if(this.state.seclusion === true){
      this.state.enteredHoldList.push(' Seclusion,');
    }else{
      this.state.enteredHoldList.push(regularHold);
    }

    this.setState({[holdIdVariable]: id})
    this.setState({stop_time: ""})
    this.setState({start_time: ""})
    this.setState({length: ""})
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

  //STUDENT INFORMATION VALIDATION  

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

  // DATE SECTION

  day_of_the_weekHandler = (date) => {
    let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let weekday = daysOfTheWeek[date.getDay()];
    this.setState({day_of_the_week: weekday});
  }

  dateHandler = (newdate) => {this.setState({date: newdate})};

  // GENERAL HTML FUNCTIONS

  Select = (list, name, handler, multiple) => {
    const options = list.map((item) => {
      return(
        <option value={item}>{item}</option>
      )
    });
    if(!multiple){
      return( 
        <div>
          <label htmlFor={name}>{name}</label>
          <select id={name} name={name} onChange={handler}>
            {options}
          </select>
        </div>
       );
    }else {
      return( 
        <div>
          <label htmlFor={name}>{name}</label>
          <select id={name} name={name} onChange={handler} multiple>
            {options}
          </select>
        </div>
       );
    }    
  }

  boolConversion = (property) => {
    return (event) => {
      const { target: {value}} = event
      if(['true', 'false'].includes(value)){
        this.setState({[property]: value === "true"}, () => {this.createSeclusionHoldIncident();})
      }else{
        this.setState({[property]: '---'})
      }
    }    
  }

  stateUpdate = (property, multiple) => {
    let result = this.state.[property]
    return (event) => {
      const { target: {value}} = event
      if(multiple){
        result.push(value)
        this.setState({[property]: result});
      }else { this.setState({[property]: value}, () => {this.createForceHoldIncident();})}
    }
  }

  // INVOLVED FUNCTIONS
  involvedStaff = () => {
    document.getElementById('involvedPeopleList').removeAttribute('hidden');
    let newStaff ={
      staff_name: this.state.people_involved
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

  //PDF GENERATION AND EMAIL

  sendEmail = () => {
    //
  }

  // STAFF SUBMITTER INFO VERIFICATION

  submitterVerification = async() => {
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
      .then(await this.emailVerification)
  }

  emailVerification = async(staff) => {
    if(this.state.submissionEmail !== staff.email){
      this.setState({formError:'This email does not match the one on record'});
    }
  }

  // END SUBMIT DATA MANIPULATION

  handleSubmit = (event) => {
    event.preventDefault();

    if( this.state.room_location === '---' || this.state.seclusion === '---' || this.state.reasonable_force === '---' || this.student_Injury === '---' || this.staff_Injury === '---' || this.law_enforcement === '---'){
      this.setState({formError: 'You must make a selection'})
    }
    //I still need more data validation
    
    this.finalPostRequest();
  }

  finalPostRequest = async() => {
    await this.finalDataPreperation();
    if(this.state.formError === ''){
      let newIncident = {
        student_marss: this.state.student_marss,
        staff_submitter: this.state.staff_submitter,
        school: this.state.school,
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
        people_involved:this.state.enteredPersonsList,
        major_disruption: this.state.major_disruption,
        approver: this.state.approver,
      }
      fetch(`${config.API_ENDPOINT}`, {
        method: 'POST',
        body: JSON.stringify(newIncident),
        headers: {
          'content-type': 'application/json'
        },        
      })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => { throw error })
        }
        return res.json()   
      })
      .then(this.sendEmail())
    }
  } 

  finalDataPreperation = async() => {
    await this.submitterVerification();
    await this.studentCheck();    
    await this.approverAssignment();
    await this.schoolConversion();
  } 

  approverAssignment = async() => {
    if(this.state.school === 'Concord'){
      this.setState({approver: 1})
    }
  }

  schoolConversion = async() => {
    if(this.state.school === 'Concord'){
      this.setState({school: 5})
    }
  }

  getMultipleSelectValues = (select) => {
    console.log(select)
    let result = [];
    let options = select && select.options;
    let opt;
  
    for (let i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    //this.setState({[property]: result});
  }

  renderForm = () => {
        if(this.props.school === "NONE"){
            return(
                <div>Please Select Your Location</div>
            )
        }
        else if(this.props.school === "Concord"){
            return <ConcordForm school={this.props.school}/>            
        }
        else if(this.props.school === "Alliance"){
            //return <AllianceForm />            
        }else if(this.props.school === "Lebanon"){
            //return <LebanonForm />            
        }else if(this.props.school === "Cedar"){
            return <CedarForm />            
        }else if(this.props.school === "Program"){
            //return <ProgramForm />            
        }else {
            return null 
        }
  }

    render(){
      // Do I need to pass the variables into context if I am updating them here?
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
          displayInvolved: this.displayInvolved,
          createSeclusionHoldIncident: this.createSeclusionHoldIncident,
          getMultipleSelectValues: this.getMultipleSelectValues

        }
        return(
          <Context.Provider value={value}>
            <div>
                {this.renderForm()}
            </div>
          </Context.Provider>            
        )
    }
}