import React from 'react';
import { shallow } from 'enzyme';

import PostForm from '../PostForm';

describe('<PostForm />', () => {
  it('renders PostForm without crashing', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
