import React from 'react';
import { shallow } from 'enzyme';

import UserPostDetailContainer from '../UserPostDetailContainer';

describe('<UserPostDetailContainer />', () => {
  it('renders UserPostDetailContainer without crashing', () => {
    const wrapper = shallow(<UserPostDetailContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
