import React, { Component } from 'react';
import config from '../config';


export default class ApproverPage extends Component {
    state = {
        comments: '',
        date: null,
        location: '',
        reportingStaff: '',
        incidentNumber: null,
        approved: false,
    };

    componentWillMount(){
        this.setState({ incidentNumber: this.props.match.params.id})
        fetch(config.API_ENDPOINT + '/conformationpage/' + this.props.match.params.id, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok){
              alert('Student MARSS and/or Last Name Invalid') // This is needs to be a regular message displayed that interupts submission
            }
            return res.json()    
          })
        .then(this.stateUpdate)
    }

    stateUpdate = (incident) => {
        this.setState({date: incident.date})
        this.setState({location: incident.school_name})
        this.setState({reportingStaff: incident.staff_submitter })
    }

    addComments = () => {
        this.setState({comments: this.event.target})
    }

    acceptButton = (event) => {
        event.preventDefault();
    }

    returnButton = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Incident Report Conformation</h1>
                </header>
                <main>
                    <h4>Date:</h4> {this.state.date}
                    <h4>Location:</h4> {this.state.location}
                    <h4>Reporting Staff:</h4> {this.state.reportingStaff}
                    <h4>Incident Number:</h4> {this.state.incidentNumber}
                    <div id='commentsSection'>
                        <label htmlFor="comments">Comments</label>
                        <input type="text" id="comments" name="comments" onChange={this.addComments}/>
                        <div>
                            <button type="button" onClick={this.acceptButton}>Accept Incident</button>
                            <button type="button" onClick={this.returnButton}>Return To Sender</button>
                        </div>                        
                    </div>                    
                    <div id='approvedMessage' hidden>
                        <p>This Incident has been marked as approved</p>
                    </div>
                    <div id='returnedMessage' hidden>
                        <p>The creator has been sent your feedback and a revision request</p>
                    </div>
                </main>
            </div>
        )
    }
}