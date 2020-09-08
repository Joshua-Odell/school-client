import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Output from './Output/Output'
import Input from './Input/Input'
import FormSelector from './FormSelector/FormSelector';

export default class App extends Component {
  render(){
    return(
      <main>
        <Route exact path='/' component={FormSelector} />
        <Route path='/output' component={Output} />
      </main>
    )
  }
}