import React from 'react';
import { View, StatusBar, ListView, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import { SCENES } from './constants';
import SceneCard from '../../components/SceneCard';

class Home extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(SCENES),
    };
  }

  renderSceneCard = (screen) => (
    <SceneCard screen={screen} />
  )

  render() {
    return (
      <Container style={{ backgroundColor: '#4D4669' }}>
        <StatusBar barStyle="light-content" />

        <View style={styles.viewStyle}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderSceneCard}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft: 40,
    marginRight: 40,
  },
});

export default Home;
