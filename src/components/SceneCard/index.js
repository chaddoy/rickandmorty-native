import React from 'react';
import {
  Card, CardItem, Thumbnail, Text, Left, Body, Right, Icon,
} from 'native-base';

function SceneCard(props) {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={props.screen.thumbnail} />
          <Body>
            <Text>{props.screen.name}</Text>
          </Body>
        </Left>
        <Right>
          <Icon name="arrow-right" type="Feather" />
        </Right>
      </CardItem>
    </Card>
  );
}

export default SceneCard;
