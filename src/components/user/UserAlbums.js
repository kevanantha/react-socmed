import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserAlbums = props => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { album } = props;
  
  return (
    <Card
      style={{ margin: "auto" }}
      color={randomColor}
    >
    <Card.Content>
      <Card.Header>{album.title}</Card.Header>
      <Card.Description>
        {album.body}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui one buttons" style={{ marginTop: 15 }}>
        <Button animated='fade'>
          <Link to={`/users/${album.userId}/albums/${album.id}/photos`}>
            <Button.Content visible>View Album</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Link>
	      </Button>
      </div>
    </Card.Content>
  </Card>
  )
}

export default UserAlbums;
