import React from 'react';
import { shallow } from 'enzyme';

import {AuralStatus} from './aural-status';
import {generateAuralUpdate} from '../actions';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });
});