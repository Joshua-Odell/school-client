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
            <form onSubmit={this.context.handleSubmit.bind(this)}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" name="email" placeholder="Valid email address" onChange={this.context.emailHandler.bind(this)}/>
                </div>
                <div>
                    <label htmlFor="reporter">Your Name</label>
                    <input type="text" id="reporter" name="reporter" placeholder="Your Name" onChange={this.context.submitterNameHandler.bind(this)} />
                </div>                       
                <div>
                    <label htmlFor="studentLastName"> Student's Last Name</label>
                    <input type="text" id="studentLastName" name="studentLastName" onChange={this.context.studentLastNameHandler.bind(this)} /> 
                </div>                
                <div>
                    {/* Unique number to student */}
                    <label htmlFor="marssNumber">MARSS Number</label>
                    <input type="text" id="marssNumber" name="marssNumber" onChange={this.context.marssHandler.bind(this)}/>
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
                    <textarea name="contributingVariables" id="contributingVariables" rows="10" cols="30" onChange={this.context.contributingVariablesHandler.bind(this)}
                    placeholder="this might include getting no sleep, hunger, new staff, new peer, 
                    events earlier in the day, etc. – anything that may have impacted the student's behavior"></textarea>
                </div>
                <div>
                    <label htmlFor="antecedent">Antecedent</label>
                    <textarea name="antecedent" id="antecedent" rows="10" cols="30" onChange={this.context.antecedentHandler.bind(this)}
                    placeholder="this should include what happened before the challenging behavior - it may not be one specific thing but could be a
                    sequence of events"></textarea>
                </div>                
                <div>
                    {this.context.multiple_holds}
                    <button onClick={this.context.addHold.bind(this)}>Add Hold</button>
                    
                </div>
                <div>
                <div>
                    <label htmlFor="startTime">Start Time</label>
                    <input type="time" id="startTime" name="startTime" onChange={this.context.startTimeHandler.bind(this)} />
                </div>
                <div>
                    <label htmlFor="stopTime">Stop Time</label>
                    <input type="time" id="stopTime" name="stopTime" onChange={this.context.stopTimeHandler.bind(this)} />
                </div>
                <div>
                    {this.context.Select(list.holds, 'Physical Holding', this.context.physicalHoldingHandler.bind(this))} 
                </div>
                </div>
                <div>
                    <label htmlFor="seclusion">Seclusion</label>
                    <select id="seclusion" name="seclusion" onChange={this.context.seclusionHandler.bind(this)}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="force">Reasonable Force</label>
                    <select id="force" name="force" onChange={this.context.forceHandler.bind(this)}>
                        <option value="---">---</option>
                        <option value="None">--None--</option>
                        <option value="Non-PCM Hold">Non-PCM Hold</option>
                        <option value="Unlicensed Seclusion">Unlicensed Seclusion</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="studentInjury">Student injury during restrictive procedure</label>
                    <select id="studentInjury" name="studentInjury" onChange={this.context.studentInjuryHandler.bind(this)}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="staffInjury">Staff injury during restrictive procedure</label>
                    <select id="staffInjury" name="staffInjury" onChange={this.context.staffInjuryHandler.bind(this)}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lawEnforcment">Law Enforcment involved</label>
                    <select id="lawEnforcment" name="lawEnforcment" onChange={this.context.lawEnforcmentHandler.bind(this)}>
                        <option value="---">---</option>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                <div>
                    {this.context.Select(list.concordRoomLocation, "Location", this.context.roomlocationHandler.bind(this))}
                </div>
                <div>
                    {/* I have list to generate this but this one requires a multiple option */}
                    <label htmlFor="majorDisruption">Major Disruption</label>
                    <select id='majorDisruption' name='majorDisruption' multiple onChange={this.context.disruptionHandler.bind(this)}>
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