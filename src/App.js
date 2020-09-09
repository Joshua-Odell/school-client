import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Output from './Output/Output';
import FormSelector from './FormSelector/FormSelector';
import ApproverPage from './Approver/ApproverPage';

export default class App extends Component {
  render(){
    return(
      <main>
        <Route exact path='/' component={FormSelector} />
        <Route path='/conformationpage/:id' component={ApproverPage} />
        <Route path='/output' component={Output} />
      </main>
    )
  }
}