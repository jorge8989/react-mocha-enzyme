import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders Hello', () => {
    const wrapper = shallow(<App />);
    const editText = <h1>Hello</h1>;
    expect(wrapper).to.contain(editText);
  });

  chai.use(chaiEnzyme())

})