import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const day_of_the_weekHandler = require('./Input/Input')

const expect = require('chai').expect;

describe('Input test', () => {
  it('date should return a Monday', () => {
    const a = "staff_submitter"
    const b = "test"
    const stateGeneralUpdate(a, b);
    stateGeneralUpdate(a, b);
    expect(this.context.staff_submitter).to.equal()
  })
});
