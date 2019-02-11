import React from 'react';
import { shallow } from 'enzyme';

import PostDetailContainer from '../PostDetailContainer';

describe('<PostDetailContainer />', () => {
  it('renders PostDetailContainer without crashing', () => {
    const wrapper = shallow(<PostDetailContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
