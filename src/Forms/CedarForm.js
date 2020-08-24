import React from 'react';
import '../store';

export default function CedarForm() {
    return(
        <form>
    <div>
        <label for="email">Your Email</label>
        <input type="text" id="email" name="email" placeholder="Valid email address"/>
    </div>
    <div>
        <label for="reporter">Your Name</label>
        <input type="text" id="reporter" name="reporter" placeholder="Valid email address"/>
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
        <label for="disability">Disability</label>
        <select id="disability" name="disability">
            <option value="ASD">ASD</option>
            <option value="DB">DB</option>
            <option value="D/HH">D/HH</option>
            <option value="DCD-MM">DCD-MM</option>
            <option value="DCD-SP">DCD-SP</option>
            <option value="DD 3-6">DD-36</option>
            <option value="EBD">EBD</option>
            <option value="OHD">OHD</option>
            <option value="PI">PI</option>
            <option value="SMI">SMI</option>
            <option value="SLD">SLD</option>
            <option value="SLI">SLI</option>
            <option value="TBI">TBI</option>
        </select>
    </div>
    <div>
        <label for="federal">Federal Setting</label>
        <select id="federal" name="federal">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
        </select>            
    </div>
    <div>
        <label for="age">Age</label>
        <select id="age" name="age">
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
        </select>
    </div>
    <div>
        <label for="raceEthnicity">Race/Ethnicity</label>
        <select id="raceEthnicity" name="raceEthnicity">
            <option value="American Indian">American Indian</option>
            <option value="Asian">Asian</option>
            <option value="Black">Black</option>
            <option value="Hispanic">Hispanic</option>
            <option value="white">White</option>
            <option value="Multirace">Multirace</option>
            <option value="Other">Other</option>
        </select>
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
        <label for="holding">Physical Holding</label>
        <select id="holding" name="holding">
            <option value="None">--None--</option>
            <option value="Transport- Single Wrist Tri">Transport - Single Wrist Tri</option>
            <option value="Transport- Double Wrist Tri">Transport - Double Wrist Tri</option>
            <option value="Transport- Single Sunday Stroll">Transport - Single Sunday Stroll</option>
            <option value="Transport- Double Sunday Stroll">Transport - Double Sunday Stroll</option>
            <option value="Transport- One Arm Wrap">Transport- One Arm Wrap</option>
            <option value="One-Arm Wrap">One Arm Wrap</option>
            <option value="2-Person Vertical">2 - Person Vertical</option>
            <option value="3-Person Vertical">3 - Person Vertical</option>
            <option value="2-3 Person Vertical">2 - 3 Person Vertical</option>
            <option value="Supine">Supine</option>            
        </select>
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
        <label for="day">Day of Week</label>
        <select id='day' name='day'>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednsday">Wednsday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
        </select>
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
        <label for="building">Building/Site</label>
        <select id="building" name="building">
            <option value="CEC">CEC</option>
        </select>
    </div>
    <div>
        <label for="program">Program</label>
        <select id="program" name="program">
            <option value="SUN">SUN</option>
        </select>
    </div>
    <div>
        <label for="roomlocation">Location</label>
        <select id="roomlocation" name="rooomlocation" multiple>
            <option value="Classroom">Classroom</option>
            <option value="Individual Office">Individual Office</option>
            <option value="Blue Hallway">Blue Hallway</option>
            <option value="Green Hallway">Green Hallway</option>
            <option value="Red Hallway">Red Hallway</option>
            <option value="Yellow Hallway">Yellow Hallway</option>
            <option value="Sensory Room">Sensory Room</option>
            <option value="Lunch Room">Lunch Room</option>
            <option value="Gym">Gym</option>
            <option value="Outside">Outside</option>
            <option value="Playground">Playground</option>
            <option value="Front Office">Front Office</option>
            <option value="Field Trip">Field Trip</option>
            <option value="Front Entrance ">Front Entrance</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Life SKills Lab">Life SKills Lab</option>
            <option value="Project Discovery Lab">Project Discovery Lab</option>
        </select>
    </div>
    <div>
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