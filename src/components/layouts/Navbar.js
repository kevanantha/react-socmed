import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      modalOpen: false
    };

    this.onAddPost = () => {
      this.setState({ modalOpen: true });
    };

    this.onCancelPost = () => {
      this.setState({ modalOpen: false });
    };

    this.onCommitAddPost = values => {
      return this.props.Post.create(values).then(res => {
        this.onCancelPost();
        alert('post created');
      });
    };
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <NavLink to={'/'}>
          <Menu.Item
            color="blue"
            name="home"
            active={activeItem === 'home'}
          />
        </NavLink>
      </Menu>
    )
  }
}

export default Navbar;
