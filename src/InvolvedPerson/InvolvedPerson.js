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