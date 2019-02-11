import React from 'react';
import { shallow } from 'enzyme';

import UserAlbumDetailContainer from '../UserAlbumDetailContainer';

describe('<UserAlbumDetailContainer />', () => {
  it('renders UserAlbumDetailContainer without crashing', () => {
    const wrapper = shallow(<UserAlbumDetailContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
