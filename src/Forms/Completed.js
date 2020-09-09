import React from 'react';

export default class Completed extends React.Component {
    render(){
        return(
            <div>
                <h2>Incident Report Sucessfully Submitted</h2>
                <button type='reset' onClick={() => window.location.reload(true)}>Start a New Incident</button>
            </div>
        )
    }
}