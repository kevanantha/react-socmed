import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const User = (props) => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const {
    id,
    name,
    email,
    address: { zipcode, city },
    company: { name: companyName },
    phone,
    username,
    website,
  } = props.user;
  
  return (
    <Card
      style={{ margin: 'auto' }}
      color={randomColor}
    >
    <Card.Content>
      <Card.Header>{name} <span style={{ color: '#999999', fontSize: 14 }}>{`@${username}`}</span></Card.Header>
      <Card.Meta>
        <Icon name='marker' />
        {zipcode} {city}
      </Card.Meta>
      <Card.Description>
        <Icon name='building' />
        {companyName}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
			<a href={phone}>
        <Icon name='phone' />
        {phone}
			</a>
        <br />
			<a href={`mailto:${email}`}>
        <Icon name='mail' />
        {email}
			</a>
        <br />
			<a href={website}>
        <Icon name='globe' />
        {website}
			</a>
			<div className='ui two buttons' style={{ marginTop: 15 }}>
				<Button animated='fade'>
          <Link to={`/users/${id}/posts`}>
            <Button.Content visible>10 posts</Button.Content>
            <Button.Content hidden>View All Posts</Button.Content>
          </Link>
				</Button>
				<Button animated='fade'>
          <Button.Content visible>1 album</Button.Content>
          <Button.Content hidden>View All Album</Button.Content>
				</Button>
			</div>
    </Card.Content>
  </Card>
  )
}

export default User
