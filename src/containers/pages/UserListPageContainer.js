import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader, Dimmer, Header, Grid } from 'semantic-ui-react';
import * as userActions from '../../actions/user';
import User from '../../components/user/User';

class UserListPageContainer extends Component {
  componentDidMount() {
    this.props.User.loadAll();
  }

  render() {
    const { users, isLoading } = this.props;
    console.log(this.props)
    return (
      <>
        {users.length === 0 || isLoading ?
          <Dimmer active inverted>
            <Loader size='huge'>Loading...</Loader>
          </Dimmer>
        :
          <>
            <Header as='h1' textAlign='center' style={{ marginBottom: 50 }}>Qumparant Users</Header>
            <Grid columns={2} container>
              <Grid.Row>
                {users.map(user => (
                  <Grid.Column key={user.id} style={{ marginBottom: 20 }}>
                    <User user={user} />
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  const { users, isLoading } = state.users;
  return {
    users,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    User: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPageContainer);
