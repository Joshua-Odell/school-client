import React, { Component } from 'react';
import CedarForm from '../Forms/CedarForm';
import ConcordForm from '../Forms/ConcordForm';
import { render } from '@testing-library/react';
import Input from '../Input/Input'

let changes = 0;

export default class FormSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            school: "NONE",
            schoolForm: "",
        }
    }    

    locationHandler = (event) => {
          this.setState({school: event.target.value}, () => {this.schoolFormSelector();});
          changes ++;
          document.getElementById('schoolList').setAttribute("hidden", true);
    }  

    schoolList = () => {
        if( this.state.school === "NONE"){
          return(
            <nav>
                <label htmlFor="school">At which site did the Incident occur?</label>
                    <select id="school" name="school" onChange={this.locationHandler.bind(this)} value={this.state.value}>
                        <option value="NONE">--NONE--</option>
                        <option value="Concord">Concord Education Center</option>
                        <option value="Alliance">Alliance Education Center</option>
                        <option value="Lebanon">Lebanon Education Center</option>
                        <option value="Cedar">Cedar School?</option>
                        <option value="program">programs?</option>
                </select>
            </nav>
          );
        }
      }

    schoolFormSelector = () => {
        let school = this.state.school;
        if(school === "NONE"){
            return(
                <div>Please Select Your Location</div>
            )
        }
        else if(school === "Concord"){
            this.setState({schoolForm: <ConcordForm />})            
        }
        else if(school === "Alliance"){
            //this.setState({schoolForm: <AllianceForm />})            
        }else if(school === "Lebanon"){
            //this.setState({schoolForm: <LebanonForm />})            
        }else if(school === "Cedar"){
            this.setState({schoolForm: <CedarForm />})            
        }else if(school === "Program"){
            //this.setState({schoolForm: <ProgramForm />})            
        }else {
            alert('School selection error')
        }
    }    
    
    render(){
        return(
            <div>
                <header>
                    <h1>Incident Report Form</h1>
                </header>
                <nav id='schoolList'>
                    <label htmlFor="school">At which site did the Incident occur?</label>
                    <select id="school" name="school" onChange={this.locationHandler.bind(this)} value={this.state.value}>
                        <option value="NONE">--NONE--</option>
                        <option value="Concord">Concord Education Center</option>
                        <option value="Alliance">Alliance Education Center</option>
                        <option value="Lebanon">Lebanon Education Center</option>
                        <option value="Cedar">Cedar School?</option>
                        <option value="program">programs?</option>
                    </select>
                </nav>
                <main>
                  <Input
                  school={this.state.school}
                  schoolForm={this.state.schoolForm}
                   />
                </main>
            </div>
        )    
    }
}
