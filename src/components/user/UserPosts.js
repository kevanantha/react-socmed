import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserPosts extends Component {
  render() {
    const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const { onDelete, onEdit, post } = this.props;
    
    return (
      <Card
        style={{ margin: 'auto' }}
        color={randomColor}
      >
        <Card.Content>
          <Card.Header>{post.title}</Card.Header>
          <Card.Description>
            {post.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui three buttons' style={{ marginTop: 15 }}>
            <Button size='small' animated='fade'>
              <Link to={`/users/${post.userId}/posts/${post.id}`}>
                <Button.Content visible>Vew</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Link>
            </Button>

            <Button
              size='small'
              animated='fade'
              onClick={onEdit(post)}
            >
              <Button.Content visible>Edit</Button.Content>
              <Button.Content hidden>
                <Icon name='edit' />
              </Button.Content>
            </Button>

            <Button
              size='small'
              animated='fade'
              onClick={onDelete(post)}
            >
              <Button.Content visible>Delete</Button.Content>
              <Button.Content hidden>
                <Icon name='trash' />
              </Button.Content>
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default UserPosts;
