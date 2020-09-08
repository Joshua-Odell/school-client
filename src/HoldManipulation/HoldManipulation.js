
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