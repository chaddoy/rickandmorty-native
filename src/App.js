import React from 'react';
import { Font, AppLoading } from 'expo';
import { View, StatusBar, Image } from 'react-native';
import {
  Container, Button, Text,
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
      <Container style={{ backgroundColor: '#181818' }}>
        <StatusBar
          barStyle="light-content"
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              width: 180,
              height: 180,
            }}
          >
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              resizeMode="contain"
              source={HomeRickMorty}
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              marginTop: 20,
            }}
          >
            <Button success><Text>EXPLORE</Text></Button>
          </View>
        </View>
      </Container>
    );
  }
}
