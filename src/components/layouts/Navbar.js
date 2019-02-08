import React, { Component } from 'react';
import { Dropdown, Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large'>
        <NavLink to={'/'}>
          <Menu.Item
            color='blue'
            name='home'
            active={activeItem === 'home'}
            /* onClick={() => ( */
            /*   <NavLink to={'/'}></NavLink> */
            /* )} */
          />
        </NavLink>
        {/*<NavLink to={'/top-songs-id'}>
          <Menu.Item
            color='blue'
            name='top_15_indonesia'
            active={activeItem === 'top_15_indonesia'}
            onClick={this.handleItemClick}
          />
        </NavLink>*/}

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Indonesian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign In</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;
