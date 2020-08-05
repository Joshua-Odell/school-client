import React from 'react';
import CedarForm from '../Forms/CedarForm';
import ConcordForm from '../Forms/ConcordForm';


export default function FormSelector(props) {
    let schoolLocation = props.schoolLocation; 
    if(schoolLocation === "NONE"){
        return(
            <div>Please Select Your Location</div>
        )
    }
    if(schoolLocation === "Concord"){
        return(
            <ConcordForm/>
        )
        
    }else{
        return(
            <div>test</div>
        )
        
    } 
}
