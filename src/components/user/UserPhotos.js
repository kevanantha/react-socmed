import React from 'react';
import { Card, Button, Image, Modal } from 'semantic-ui-react';

const UserPhotos = (props) => {
  const colors = ['red', 'orange', 'yellow', 'blue', 'pink', 'green', 'grey', 'purple', 'teal', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const { title, url } = props.photo;
  
  return (
    <Card
      style={{ margin: 'auto' }}
      color={randomColor}
    >
    <Image src={url} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content extra>
			<div style={{ marginTop: 15 }}>
        <Modal trigger={<Button>Show Photo</Button>}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content image>
            <div style={{ margin: 'auto' }}>
              <Image wrapped size='medium' src={url}/>
            </div>
          </Modal.Content>
        </Modal>
			</div>
    </Card.Content>
  </Card>
  )
}

export default UserPhotos;
