import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Output from './Output/Output'
import Input from './Input/Input'

export default class App extends Component {
  render(){
    return(
      <main>
        <Route exact path='/' component={Input} />
        <Route path='/output' component={Output} />
      </main>
    )
  }
}