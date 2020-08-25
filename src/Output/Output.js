import React from "react";
import { Component } from "react";

export default class Output extends Component {
    constructor(props){
        super(props);
        this.state = {
          schoolLocation: "All",
          submissionEmail: "True",
          submitterName: "True",
          studentFirstName: "True",
          studentLastName: "True",
          grade: "True",
          iepManager: "True",
          involvedPeople: "True",
          director: "True",
          mars: "True",
          contributingVariables: "True",
          antecedent: "True",
          disability: "True",
          federal: "True",
          age: "True",
          raceEthnicity: "True",
          gender: "True",
          date: "True",
          physicalHolding: "True",
          seclusion: "True",
          force: "True",
          startTime: "True",
          endTime: "True",
          length: "True",
          injury: "True",
          lawEnforcment: "True",
          program: "True",
          roomlocation: "True",
          disruption: "True"
        }
      }

    schoolLocation(event){ this.setState({schoolLocation: event.target.value})}


    render(){
        return(
            <div>
                <header>
                    <h1>Data return</h1>
                </header>
                <main>
                    What school would you like information about?
                </main>
                <label htmlFor="school">At which site did the Incident occur?</label>
                    <select id="school" name="schoolLocation" onChange={this.schoolHandler} value={this.state.value}>
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
                        <input type="text" id="textMatch" name="textMatch" placeholder="An empty search field returns all results"/>
                        <label for="fieldSearch">Matching Field</label>
                        <select id='fieldSearch' name='fieldSearch'>
                            <option value="MARS_Number">MARS Number</option>
                            <option value="SubmitterEmail">Submitter Email</option>
                            <option value="SubmitterName">Submitter Name</option>
                            <option value="Student Lastname">Student Last Name</option>
                            <option value="Grade">Grade</option>
                        </select>
                    </div>
                    <div>
                        Advanced
                        <div hidden>
                            Advanced Content
                        </div>
                    </div>
                    <div>
                        <button>Search</button>
                    </div>

                </form>
            </div>            
        )
    }
}