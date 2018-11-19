import React from 'react';
import { Font, AppLoading } from 'expo';

import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'; // eslint-disable-line camelcase
import Feather from '@expo/vector-icons/fonts/Feather.ttf';
import Ionicons from '@expo/vector-icons/fonts/Ionicons.ttf';

import AppContainer from './AppContainer';

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
      <AppContainer />
    );
  }
}
