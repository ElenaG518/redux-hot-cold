import React from 'react';
import { shallow } from 'enzyme';

import {TopNav} from './top-nav';
import {newGame, generateAuralUpdate} from '../actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Dispatches newGame from newGame', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
        <TopNav dispatch={dispatch} />
    );
    // const instance = wrapper.instance();
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });

  it('Dispatches generateAuralUpdate when state-of-game link is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
        <TopNav dispatch={dispatch} />
    );
    // const instance = wrapper.instance();
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalled();
  });


  
});
