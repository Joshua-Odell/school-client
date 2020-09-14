import React, { Component } from "react";
import Context from '../Context';
import config from '../config';

const moment = require('moment');

export default class LengthHandler extends Component{

  static contextType = Context;

  lengthHandler = () => {
    let seconds = this.context.seconds;
    let start = moment(this.context.start_time, "HH:mm");
    let stop = moment(this.context.stop_time, "HH:mm");
    let time = ""
    if(start > stop){
      this.context.stateGeneralUpdate('holdError', 'Start Time Must Be Before Stop Time');
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
    this.context.stateGeneralUpdate('length', time, () => {this.addHold(); });       
  }

  addHold = () => {
    
    let start_time = this.context.start_time;
    let stop_time = this.context.stop_time;
    let length = this.context.length;
    let holds_used = this.context.holds_used;
    
    let newHold = {
      hold_type: holds_used,
      start_time: start_time,
      stop_time: stop_time,
      duration: length,
    }

    document.getElementById('enteredHolds').removeAttribute('hidden');

    if(this.context.reasonable_force === "Non-PCM Hold" || this.context.reasonable_force === "Unlicensed Seclusion"){
      newHold.hold_type = this.context.reasonable_force
    }
    else if(this.context.seclusion){
      newHold.hold_type = 'seclusion'
    }

    if(holds_used === '---' && !this.context.seclusion){
      this.context.setState('holdError', 'All fields must be filled out')
    }
    if(this.context.count > 5){
      this.context.setState('holdError', 'There is a maximum of five holds allowed')
    }
    if(start_time > stop_time){
      this.context.setState('holdError', 'Start time must be before stop time')
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
    .catch(error => console.log(error)) 
  }

  settingHoldIds = (id) => {
    let count = this.context.holdCount
    let holdIdVariable = 'hold_' + count.toString();
    let newCount = count + 1
    let regularHold = ' ' + this.context.holds_used + ','
    
    if(this.context.reasonable_force === "Non-PCM Hold" || this.context.reasonable_force === "Unlicensed Seclusion"){
      this.context.enteredHoldList.push(' ' + this.context.reasonable_force + ',');
    }
    else if(this.context.seclusion === true){
      this.context.enteredHoldList.push(' Seclusion,');
    }else{
      this.context.enteredHoldList.push(regularHold);
    }

    this.context.stateGeneralUpdate(holdIdVariable, id)
    this.context.stateGeneralUpdate('stop_time', "")
    this.context.stateGeneralUpdate('start_time', "")
    this.context.stateGeneralUpdate('length', "")
    this.context.stateGeneralUpdate('holdCount', newCount)
    document.getElementById('holdEntry').value = '';
  }
  render(){
    return(
      this.lengthHandler()
    )
  }
}
 
  