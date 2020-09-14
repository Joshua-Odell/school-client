import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Output from './Output/Output';
import FormSelector from './FormSelector/FormSelector';
import ApproverPage from './Approver/ApproverPage';

export default class App extends Component {
  render(){
    return(
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <link rel="manifest" href="../site.webmanifest" />
      </head>
      <main>
        <Route exact path='/' component={FormSelector} />
        <Route path='/conformationpage/:id' component={ApproverPage} />
        <Route path='/output' component={Output} />
      </main>
    </html>
    )
  }
}