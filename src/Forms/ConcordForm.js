import React from 'react';
import Context from '../Context';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const list = require('../Store/store');
const concordlist = require('../Store/ConcordStore');



export default class ConcordForm extends React.Component {
    state = {
        startDate: new Date()
    };
    static contextType = Context;

    handleChange = date => {
        this.setState({
            startDate: date
        });
        this.context.dateHandler(date);
        this.context.day_of_the_weekHandler(date);
    };

    render(){
        return(
            <form onSubmit={this.context.handleSubmit}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" name="email" placeholder="Valid email address" onChange={this.context.stateUpdate('submissionEmail')}/>
                </div>
                <div>
                    <label htmlFor="reporter">Your Name</label>
                    <input type="text" id="reporter" name="reporter" placeholder="Your Name" onChange={this.context.stateUpdate('staff_submitter')}/>
                </div>                       
                <div>
                    <label htmlFor="studentLastName"> Student's Last Name</label>
                    <input type="text" id="studentLastName" name="studentLastName" onChange={this.context.stateUpdate('student_Last_Name')} /> 
                </div>                
                <div>
                    {/* Unique number to student */}
                    <label htmlFor="marssNumber">MARSS Number</label>
                    <input type="text" id="marssNumber" name="marssNumber" onChange={this.context.stateUpdate('student_marss')}/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <DatePicker id="date" selected={this.state.startDate} onChange={this.handleChange.bind(this)} />
                </div>               
                <div>
                    {/* There should be a seperate field for each person so they can be matched to the relevant staff table */}
                    <label htmlFor="involvedPeople">People Involved:</label>
                    <input type="text" id="involvedPeople" name="involvedPeople" />
                    <button>Add Staff</button>
                    <button>Add Student</button> 
                    {/* The buttons should add the person and verify their existence in the database */}
                    {/* There should be a display showing the sucessfully added people */}
                </div>                
                <div>
                    <label htmlFor="contributingVariables">Contributing Variables</label>
                    <textarea name="contributingVariables" id="contributingVariables" rows="10" cols="30" onChange={this.context.stateUpdate('contributing_variables')}
                    placeholder="this might include getting no sleep, hunger, new staff, new peer, 
                    events earlier in the day, etc. – anything that may have impacted the student's behavior"></textarea>
                </div>
                <div>
                    <label htmlFor="antecedent">Antecedent</label>
                    <textarea name="antecedent" id="antecedent" rows="10" cols="30" onChange={this.context.stateUpdate('antecedent')}
                    placeholder="this should include what happened before the challenging behavior - it may not be one specific thing but could be a
                    sequence of events"></textarea>
                </div>
                <div>
                        
                        <button type="button" onClick={this.context.createHoldIncident}>Add Hold</button>
                        
                    </div>                
                <div id='holdEntry' hidden>                    
                    <div >                   
                        {this.context.Select(list.holds, 'Hold', this.context.stateUpdate('holds_used'))} 
                        <label htmlFor="startTime">Start Time</label>
                        <input type="time" id="startTime" name="startTime" onChange={this.context.stateUpdate('start_time')}/>                    
                        <label htmlFor="stopTime">Stop Time</label>
                        <input type="time" id="stopTime" name="stopTime" onChange={this.context.stateUpdate('stop_time')} />
                        <div id='optionalSeconds' hidden>
                            <label htmlFor="seconds" >Please Enter Hold Time In Seconds:</label>
                            <input type="text" id="seconds" onChange={this.context.stateUpdate('seconds')}/>
                        </div>                        
                    </div>
                    <div>
                        <button type="button" onClick={this.context.lengthHandler}>Enter Hold</button>                  
                        {this.context.holdError}
                    </div>
                    <div id='enteredHolds' hidden>
                        <h5>Entered Holds</h5>
                        {this.context.displayHolds()}
                    </div>
                </div>
                <div>
                    <label htmlFor="seclusion">Seclusion</label>
                    <select id="seclusion" name="seclusion" onChange={this.context.boolConversion('seclusion')}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="force">Reasonable Force</label>
                    <select id="force" name="force" onChange={this.context.stateUpdate('reasonable_force')}>
                        <option value="---">---</option>
                        <option value="None">--None--</option>
                        <option value="Non-PCM Hold">Non-PCM Hold</option>
                        <option value="Unlicensed Seclusion">Unlicensed Seclusion</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="studentInjury">Student injury during restrictive procedure</label>
                    <select id="studentInjury" name="studentInjury" onChange={this.context.boolConversion('student_injury')}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="staffInjury">Staff injury during restrictive procedure</label>
                    <select id="staffInjury" name="staffInjury" onChange={this.context.boolConversion('staff_injury')}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lawEnforcment">Law Enforcment involved</label>
                    <select id="lawEnforcment" name="lawEnforcment" onChange={this.context.boolConversion('law_enforcment')}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    {this.context.Select(list.concordRoomLocation, "Location", this.context.stateUpdate('room_location'))}
                </div>
                <div>
                    {/* I have list to generate this but this one requires a multiple option */}
                    <label htmlFor="majorDisruption">Major Disruption</label>
                    <select id='majorDisruption' name='majorDisruption' multiple onChange={this.context.stateUpdate('major_disruption')}>
                        <option value="Clearing Classroom">Clearing Classroom</option>
                        <option value="Physical Aggression/Fighting">Physical Aggression/Fighting</option>
                        <option value="Closing Hallway">Closing Hallway</option>
                        <option value="Elopement from school property">Elopement from school property</option>
                        <option value="Law Enforcment">Law Enforcment</option>
                        <option value="Major Property Destruction">Major Property Destruction</option>
                        <option value="Other">Other...</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>  
            </form>
        )    
    }
}