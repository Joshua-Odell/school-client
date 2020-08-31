import React from 'react';
import CedarForm from '../Forms/CedarForm';
import ConcordForm from '../Forms/ConcordForm';


export default function FormSelector(props) {
    let school = props.school; 
    if(school === "NONE"){
        return(
            <div>Please Select Your Location</div>
        )
    }
    if(school === "Concord"){
        return(
            <ConcordForm/>
        )
        
    }else{
        return(
            <div>Waiting on additional details for relevant content</div>
        )
        
    } 
    // if(school === "Cedar"){
    //     return(
    //         <CedarForm/>
    //     )
    //}
}
