import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const User = (props) => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { user } = props;
  
  return (
    <Card
      style={{ margin: "auto" }}
      color={randomColor}
    >
    <Card.Content>
      <Card.Header>{user.name} <span style={{ color: '#999999', fontSize: 14 }}>{`@${user.username}`}</span></Card.Header>
      <Card.Meta>
        <Icon name='marker' />
        {user.address.zipcode} {user.address.city}
      </Card.Meta>
      <Card.Description>
        <Icon name='building' />
        {user.company.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
			<a href={user.phone}>
        <Icon name='phone' />
        {user.phone}
			</a>
        <br />
			<a href={`mailto:${user.email}`}>
        <Icon name='mail' />
        {user.email}
			</a>
        <br />
			<a href={user.website}>
        <Icon name='globe' />
        {user.website}
			</a>
			<div className="ui two buttons" style={{ marginTop: 15 }}>
				<Button animated='fade'>
          <Link to={`/users/${user.id}/posts`}>
            <Button.Content visible>View Posts</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Link>
				</Button>
				<Button animated='fade'>
          <Link to={`/users/${user.id}/albums`}>
            <Button.Content visible>View Albums</Button.Content>
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

export default User
