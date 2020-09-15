import React from 'react';
import Context from '../Context';
import DatePicker from 'react-datepicker';
import DatePickerTwo from 'react-datepicker';
import involvedStaff from '../involvedStaff/involvedStaff';
import "react-datepicker/dist/react-datepicker.css";

const list = require('../Store/store');



export default class DHHProgramsForm extends React.Component {
    state = {
        startDate: new Date()
    };
    static contextType = Context;

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
        this.context.stateGeneralUpdate('date', date);
        this.context.day_of_the_weekHandler(date);
    };

    handleParentChange = (date) => {
        this.setState({
            startDate: date
        });
        this.context.stateGeneralUpdate('parent_notification_date', date);
    };

    clearInvolvedField = () => {
        document.getElementById('involvedPeople').value = '';
    }

    clearHoldField = (category) => {
        document.getElementById(category + 'startTime').value = '';
        document.getElementById(category + 'stopTime').value = '';
        document.getElementById(category + 'seconds').value = '';
    }

    schoolChanger = () => {
        document.getElementById('schoolList').removeAttribute('hidden')
    }

    listConverter = (list) => {
        const listItems = list.map((item) => {
            return(
            <li>{item}</li>
            )
        });
        return(
            <ul>
                {listItems}
            </ul>
        );
    }

    //Needs building field

    render(){
        return(
            <form onSubmit={this.context.handleSubmit}>
                <div>
                    <p>Current School Set To: {this.props.school}</p>
                    <button type="button" onClick={this.schoolChanger.bind(this)}>Change School</button>
                </div>
                {this.context.formError}
                <div className='container'>
                    <div id='basicInfo' className="item">
                        <div className="spacing">
                            <label htmlFor="email">Your Email</label>
                            <input type="text" id="email" name="email" placeholder="Valid email address" onChange={this.context.stateUpdate('submissionEmail')}/>
                        </div>
                        <div className="spacing">
                            <label htmlFor="reporter">Your Name</label>
                            <input type="text" id="reporter" name="reporter" placeholder="Your Name" onChange={this.context.stateUpdate('staff_submitter')}/>
                        </div>                       
                        <div className="spacing">
                            <label htmlFor="studentLastName"> Student's Last Name</label>
                            <input type="text" id="studentLastName" name="studentLastName" onChange={this.context.stateUpdate('student_Last_Name')} /> 
                        </div>                
                        <div className="spacing">
                            {/* Unique number to student */}
                            <label htmlFor="marssNumber">MARSS Number</label>
                            <input type="text" id="marssNumber" name="marssNumber" onChange={this.context.stateUpdate('student_marss')}/>
                        </div>
                        <div className="spacing">
                            <label htmlFor="date">Date</label>
                            <DatePicker id="date" selected={this.state.startDate} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>                
                    <div id='involvedPeopleGroup' className="item">
                        <div className="spacing">
                            {/* There should be a seperate field for each person so they can be matched to the relevant staff table */}
                        <label htmlFor="involvedPeople">People Involved:</label>
                        <input type="text" id="involvedPeople" name="involvedPeople" onChange={this.context.stateUpdate('people_involved')}/>
                        <button type='button' onClick={() => { involvedStaff(this.context.people_involved, this.context.formError, this.context.addInvolvedPerson); this.clearInvolvedField(); }}>Add Staff</button>                        {/* The buttons should add the person and verify their existence in the database */}
                        {/* There should be a display showing the sucessfully added people */}
                        </div>
                        <div id='involvedPeopleList' className="spacing" >
                            <h5>InvolvedPeople</h5>
                            <div id='involvedList'>
                            {this.listConverter(this.context.enteredPersonsList)}
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="container" id='multipleList'>
                    <div id='problemBehavior' className="item">
                        {this.context.Select(list.behavior_type, 'Type of Problem Behavior', this.context.stateUpdate('behavior_type', true), true)}
                    </div>
                    <div className="item">
                        {/* I have list to generate this but this one requires a multiple option */}
                        <label htmlFor="majorDisruption">Major Disruption</label>
                        <select id='majorDisruption' name='majorDisruption' multiple onChange={this.context.stateUpdate('major_disruption', true)}>
                            <option value="Clearing Classroom">Clearing Classroom</option>
                            <option value="Physical Aggression/Fighting">Physical Aggression/Fighting</option>
                            <option value="Closing Hallway">Closing Hallway</option>
                            <option value="Elopement from school property">Elopement from school property</option>
                            <option value="Law Enforcment">Law Enforcment</option>
                            <option value="Major Property Destruction">Major Property Destruction</option>
                            <option value="Other">Other...</option>
                        </select>
                    </div>
                    <div className="item">
                        {this.context.Select(list.budachRoomLocation, "Location", this.context.stateUpdate('room_location'))}
                    </div>                    
                </div>                
                <div id='expandedTextArea'>                    
                    <div>
                        <label htmlFor="narrative">Narrative:</label>
                        <textarea name="narrative" id="narrative" rows="10" cols="30" onChange={this.context.stateUpdate('narrative')}
                        placeholder="this might include getting no sleep, hunger, new staff, new peer, 
                        events earlier in the day, etc. – anything that may have impacted the student's behavior"></textarea>
                    </div>                
                    <div>
                        <label htmlFor="contributingVariables">Contributing Variables:</label>
                        <textarea name="contributingVariables" id="contributingVariables" rows="10" cols="30" onChange={this.context.stateUpdate('contributing_variables')}
                        placeholder="this might include getting no sleep, hunger, new staff, new peer, 
                        events earlier in the day, etc. – anything that may have impacted the student's behavior"></textarea>
                    </div>
                    <div>
                        <label htmlFor="antecedent">Antecedent:</label>
                        <textarea name="antecedent" id="antecedent" rows="10" cols="30" onChange={this.context.stateUpdate('antecedent')}
                        placeholder="this should include what happened before the challenging behavior - it may not be one specific thing but could be a
                        sequence of events"></textarea>
                    </div>
                </div>                
                <div className="container" id='holdsSection'>
                    <div className="item" id='holdInput'>
                        <div>
                            
                            <button type="button" onClick={this.context.createHoldIncident}>Add Hold</button>
                                
                        </div>                
                        <div id='holdEntry' hidden>                    
                            <div >                   
                                {this.context.Select(list.holds, 'Hold', this.context.stateUpdate('holds_used'))} 
                                <label htmlFor="startTime">Start Time</label>
                                <input type="time" id="regular-startTime" name="startTime" onChange={this.context.stateUpdate('start_time')}/>                    
                                <label htmlFor="stopTime">Stop Time</label>
                                <input type="time" id="regular-stopTime" name="stopTime" onChange={this.context.stateUpdate('stop_time')} />
                                <div id='optionalSeconds' >
                                    <label htmlFor="seconds" >If time is less than 1 minute enter seconds:</label>
                                    <input type="text" id="regular-seconds" onChange={this.context.stateUpdate('seconds')}/>
                                </div>                        
                            </div>
                            <div>
                                <button type="button" onClick={() => {this.context.lengthHandler(); this.clearHoldField('regular-'); }}>Enter Hold</button>                  
                                {this.context.holdError}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="seclusion">Seclusion</label>
                            <select id="seclusion" name="seclusion" onChange={this.context.boolConversion('seclusion')}>
                                <option value="---">---</option>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                            <div id='seclusionHold' hidden>
                                <label htmlFor="startTime">Start Time</label>
                                <input type="time" id="seclusion-startTime" name="startTime" onChange={this.context.stateUpdate('start_time')}/>                    
                                <label htmlFor="stopTime">Stop Time</label>
                                <input type="time" id="seclusion-stopTime" name="stopTime" onChange={this.context.stateUpdate('stop_time')} />
                                <div id='optionalSeconds' >
                                    <label htmlFor="seconds" >If time is less than 1 minute enter seconds:</label>
                                    <input type="text" id="seclusion-seconds" onChange={this.context.stateUpdate('seconds')}/>
                                </div>
                                <div>
                                    <button type="button" onClick={() => {this.context.lengthHandler(); this.clearHoldField('seclusion-'); }}>Enter Hold</button>                  
                                    {this.context.holdError}
                                </div>   
                            </div>
                        </div>
                        <div>
                            <label htmlFor="force">Reasonable Force</label>
                            <select id="force" name="force" onChange={this.context.stateUpdate('reasonable_force')}>
                                <option value="---">---</option>
                                <option value="None">None</option>
                                <option value="Non-PCM Hold">Non-PCM Hold</option>
                                <option value="Unlicensed Seclusion">Unlicensed Seclusion</option>
                            </select>
                            <div id='reasonableForceHold' hidden>
                                <label htmlFor="startTime">Start Time</label>
                                <input type="time" id="force-startTime" name="startTime" onChange={this.context.stateUpdate('start_time')}/>                    
                                <label htmlFor="stopTime">Stop Time</label>
                                <input type="time" id="force-stopTime" name="stopTime" onChange={this.context.stateUpdate('stop_time')} />
                                <div id='optionalSeconds' >
                                    <label htmlFor="seconds" >If time is less than 1 minute enter seconds:</label>
                                    <input type="text" id="force-seconds" onChange={this.context.stateUpdate('seconds')}/>
                                </div>
                                <div>
                                    <button type="button" onClick={() => {this.context.lengthHandler(); this.clearHoldField('force-'); }}>Enter Hold</button>                  
                                    {this.context.holdError}
                                </div>   
                            </div>
                        </div>
                    </div>                    
                    <div className="item">
                            <h5>Entered Holds</h5>
                            <div id='enteredHolds'>
                                {this.listConverter(this.context.enteredHoldList)}
                            </div>
                            
                    </div>
                </div>
                <div id='boolQuestions'>
                    <div>
                        <label htmlFor="administration">Administration notified immediately</label>
                        <select id="administration" name="administration" onChange={this.context.boolConversion('administration')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="parent">Parent/guardian contacted immediately following procedure</label>
                        <select id="parent" name="parent" onChange={this.context.boolConversion('parent')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                        <div>
                            <label htmlFor="parent_time">Contact Time</label>
                            <input type="time" id="parent_time" name="parent_time" onChange={this.context.stateUpdate('parent_notification_time')}/>    
                            <label htmlFor="contactDate">Date</label>
                            <DatePickerTwo id="contactDate" selected={this.state.startDate} onChange={this.handleParentChange.bind(this)} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="parent_problem_solving">Engaged the parent in problem solving</label>
                        <select id="parent_problem_solving" name="parent_problem_solving" onChange={this.context.boolConversion('parent_problem_solving')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="parent_right">Informed parent of right to call for an informal or formal meeting to further discuss the incident and their child's program</label>
                        <select id="parent_right" name="parent_right" onChange={this.context.boolConversion('parent_right')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="iep_meeting">IEP meeting called to review the adequacy of the IEP (Required if this is the second emergency use of restraint or seclusion in 30 days and
    not already documented in the IEP.)</label>
                        <select id="iep_meeting" name="iep_meeting" onChange={this.context.boolConversion('iep_meeting')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="student_debriefing">Debriefing with other students</label>
                        <select id="student_debriefing" name="student_debriefing" onChange={this.context.boolConversion('student_debriefing')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staff_debriefing">Staff debriefing completed</label>
                        <select id="staff_debriefing" name="staff_debriefing" onChange={this.context.boolConversion('staff_debriefing')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
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
                        <label htmlFor="lawenforcement">Law Enforcement involved</label>
                        <select id="lawenforcement" name="lawenforcement" onChange={this.context.boolConversion('law_enforcement')}>
                            <option value="---">---</option>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                </div>               
                <div>
                    {this.context.formError}
                    <button type="submit" id='submit'>Submit</button>
                </div>  
            </form>
        )    
    }
}