import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const User = (props) => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(props)
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
      href={`/user/${id}`}
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
        <Icon name='phone' />
        {phone}
        <br />
        <Icon name='mail' />
        {email}
        <br />
        <Icon name='globe' />
        {website}
    </Card.Content>
  </Card>
  )
}

export default User
