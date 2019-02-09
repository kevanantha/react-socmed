import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserAlbums = props => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { userId, id, title, body } = props.album;
  
  return (
    <Card
      style={{ margin: 'auto' }}
      color={randomColor}
    >
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        {body}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
			<div className='ui one buttons' style={{ marginTop: 15 }}>
				<Button animated='fade'>
          <Link to={`/users/${userId}/albums/${id}/photos`}>
            <Button.Content visible>Vew Post</Button.Content>
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
