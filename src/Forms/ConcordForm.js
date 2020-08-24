import React from 'react';
import Context from '../Context';

const list = require('../store');

export default class ConcordForm extends React.Component {

    static contextType = Context;

    render(){
        return(
            <form onSubmit={this.context.handleSubmit.bind(this)}>
                <div>
                    <label for="email">Your Email</label>
                    <input type="text" id="email" name="email" placeholder="Valid email address" onChange={this.context.emailHandler.bind(this)}/>
                </div>
                <div>
                    <label for="reporter">Your Name</label>
                    <input type="text" id="reporter" name="reporter" placeholder="Your Name" onChange={this.context.subbmitterNameHandler} />
                </div>
                <div>
                    <label for="studentFirstName"> Student's First Name</label>
                    <input type="text" id="studentFirstName" name="studentFirstName"  /> 
                </div>                          
                <div>
                    <label for="studentLastName"> Student's Last Name</label>
                    <input type="text" id="studentLastName" name="studentLastName" /> 
                </div>    
                <div>
                    <label for="grade">Grade:</label>
                    <input type="text" id="grade" name="grade" /> 
                </div>
                <div>
                    <label for="iepManager">IEP Manager:</label>
                    <input type="text" id="iepManager" name="iepManager" /> 
                </div>
                <div>
                    <label for="involvedPeople">People Involved:</label>
                    <input type="text" id="involvedPeople" name="involvedPeople" /> 
                </div>
            
                <div>
                    <label for="director">Assistant Director/Principal</label>
                    <select id="director" name="cars">
                        <option value="Dalbesio">Dalbesio</option>
                    </select>
                </div>
                <div>
                    <label for="marssNumber">MARSS Number</label>
                    <input type="text" id="marssNumber" name="marssNumber" />
                </div>
                <div>
                    <label for="contributingVariables">Contributing Variables</label>
                    <textarea name="contributingVariables" id="contributingVariables" rows="10" cols="30" placeholder="this might include getting no sleep, hunger, new staff, new peer, events earlier in the day, etc. – anything
                    that may have impacted the student's behavior"></textarea>
                </div>
                <div>
                    <label for="Antecedent">Antecedent</label>
                    <textarea name="contributingVariables" id="contributingVariables" rows="10" cols="30" placeholder="this should include what happened before the challenging behavior - it may not be one specific thing but could be a
                    sequence of events"></textarea>
                </div>
                <div>
                    {this.context.Select(list.disabilityClasses, 'Disability')}
                </div>
                <div>
                    {this.context.Select(list.federalSettings, 'Federal Setting')}
                </div>
                <div>
                    {this.context.Select(list.ages, 'Age')}
                </div>
                <div>
                    {this.context.Select(list.raceEthnicity, 'Race/Ethnicity')}
                </div>
                <div>
                    <label for="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label for="date">Date</label>
                    <input type="text" id="date" name="date" placeholder="Month, day, year" />
                </div>
                <div>
                    {/* Need to account for multiple holds used Ask if hold was used give option take time repeat process */}
                    {this.context.Select(list.holds, 'Physical Holding')} 
                </div>
                <div>
                    <label for="seclusion">Seclusion</label>
                    <select id="seclusion" name="seclusion">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div>
                    <label for="force">Reasonable Force</label>
                    <select id="force" name="force">
                        <option value="None">--None--</option>
                        <option value="Non-PCM Hold">Non-PCM Hold</option>
                        <option value="Unlicensed Seclusion">Unlicensed Seclusion</option>
                    </select>
                </div>
                <div>
                    <label for="startTime">Start Time (Hour:Minutes)</label>
                    <input type="text" id="startTime" name="startTime" placeholder="12:00" />
                </div>
                <div>
                    <label for="endTime">End Time (Hour:Minutes)</label>
                    <input type="text" id="endTime" name="endTime" placeholder="12:00" />
                </div>
                <div>
                    <label for="duration">Length/Duration</label>
                    calculate based on start and stop time
                </div>
                <div>
                    {this.context.Select(list.daysOfTheWeek, 'Day of the week')}
                </div>
                <div>
                    <label for="studentInjury">Student injury during restrictive procedure</label>
                    <select id="studentInjury" name="studentInjury">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div>
                    <label for="staffInjury">Staff injury during restrictive procedure</label>
                    <select id="staffInjury" name="staffInjury">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div>
                    <label for="lawEnforcment">Law Enforcment involved</label>
                    <select id="lawEnforcment" name="lawEnforcment">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div>
                    <label for="program">Program</label>
                    <select id="program" name="program">
                        <option value="SUN">SUN</option>
                    </select>
                </div>
                <div>
                    {this.context.Select(list.concordRoomLocation, "Location")}
                </div>
                <div>
                    {/* I have list to generate this but this one requires a multiple option */}
                    <label for="majorDisruption">Major Disruption</label>
                    <select id='majorDisruption' name='majorDisruption' multiple>
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