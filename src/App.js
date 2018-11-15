import React from 'react';
import { Font, AppLoading } from 'expo';
import { View, StatusBar } from 'react-native';
import {
  Container, Card, CardItem, Thumbnail, Text, Left, Body, Right, Icon,
} from 'native-base';

import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'; // eslint-disable-line camelcase
import Feather from '@expo/vector-icons/fonts/Feather.ttf';
import Ionicons from '@expo/vector-icons/fonts/Ionicons.ttf';

import HomeRickMorty from '../assets/images/home.jpg';

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium,
      Feather,
      Ionicons,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{ backgroundColor: '#4D4669' }}>
        <StatusBar
          barStyle="light-content"
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={HomeRickMorty} />
                <Body>
                  <Text>Characters</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="arrow-right" type="Feather" />
              </Right>
            </CardItem>
          </Card>
          <Card
            style={{
              borderRadius: 10,
            }}
          >
            <CardItem>
              <Left>
                <Thumbnail source={HomeRickMorty} />
                <Body>
                  <Text>Locations</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="arrow-right" type="Feather" />
              </Right>
            </CardItem>
          </Card>
        </View>
      </Container>
    );
  }
}
