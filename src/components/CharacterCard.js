import React from "react";

import { Card, Icon, Image } from "semantic-ui-react";

const CharacterCard = props => (
  <Card>
    <Image src={props.data.src} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.data.firstName}</Card.Header>
      <Card.Meta>
        <span className="date">{props.data.age}</span>
      </Card.Meta>
      <Card.Description>{props.data.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        {props.data.friends}
      </a>
    </Card.Content>
  </Card>
);

export default CharacterCard;