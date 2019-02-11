import React from 'react';
import { shallow } from 'enzyme';

import AlbumDetailContainer from '../AlbumDetailContainer';

describe('<AlbumDetailContainer />', () => {
  it('renders AlbumDetailContainer without crashing', () => {
    const wrapper = shallow(<AlbumDetailContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
