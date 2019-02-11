import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader, Dimmer, Header, Grid } from 'semantic-ui-react';
import * as photoActions from '../../actions/photo';
import * as userActions from '../../actions/user';
import UserPhotos from '../../components/user/UserPhotos';

class AlbumDetailContainer extends Component {
  componentDidMount() {
    this.props.Photo.loadAllPhotosByAlbumId(this.props.match.params.albumId);
    this.props.User.loadUserById(this.props.match.params.userId);
  }

  render() {
    const { photos, isLoadingPhotos, user, isLoadingUsers } = this.props;
    return (
      <>
        {isLoadingPhotos || !photos || isLoadingUsers || !user ?
          <Dimmer active inverted>
            <Loader size='huge'>Loading...</Loader>
          </Dimmer>
        :
          <>
            {user.name && <Header as='h1' textAlign='center' style={{ marginBottom: 50 }}>Photos of {user.name}</Header>}
            <Grid columns={3} container>
              <Grid.Row>
                {photos.map(photo => (
                  <Grid.Column key={photo.id} style={{ marginBottom: 20 }}>
                    <UserPhotos photo={photo} />
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
  const { photos, isLoading: isLoadingPhotos } = state.photos;
  const { user, isLoading: isLoadingUsers } = state.users;
  return {
    photos,
    isLoadingPhotos,
    user,
    isLoadingUsers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    User: bindActionCreators(userActions, dispatch),
    Photo: bindActionCreators(photoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetailContainer);
