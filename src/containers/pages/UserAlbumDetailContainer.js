import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader, Dimmer, Header, Grid } from 'semantic-ui-react';
import * as userActions from '../../actions/user';
import * as albumActions from '../../actions/album';
import UserAlbums from '../../components/user/UserAlbums';

class UserAlbumDetailContainer extends Component {
  componentDidMount() {
    this.props.Album.loadAllAlbumByUserId(this.props.match.params.userId);
    this.props.User.loadUserById(this.props.match.params.userId);
  }

  render() {
    const { albums, isLoadingAlbums, isLoadingUsers } = this.props;
    const { user={} } = this.props;
    const { name } = user;

    return (
      <>
        {isLoadingUsers || isLoadingAlbums || albums.length === 0 || user.length === 0 || albums === undefined ?
          <Dimmer active inverted>
            <Loader size='huge'>Loading...</Loader>
          </Dimmer>
        :
          <>
            {name && <Header as='h1' textAlign='center' style={{ marginBottom: 50 }}>Albums of {name}</Header>}
            <Grid columns={2} container>
              <Grid.Row>
                {albums.map(album => (
                  <Grid.Column key={album.id} style={{ marginBottom: 20 }}>
                    <UserAlbums album={album} />
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
  const { albums, isLoading: isLoadingAlbums } = state.albums;
  const { user, isLoading: isLoadingUsers } = state.users;
  return {
    albums,
    isLoadingAlbums,
    user,
    isLoadingUsers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    User: bindActionCreators(userActions, dispatch),
    Album: bindActionCreators(albumActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbumDetailContainer);
