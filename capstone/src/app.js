import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Days from './days';

class App extends Component {

  renderDays() {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays.map((day) => {
      return (
        <Days key={day} days={day} />
      )
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.fontStyle}> Days of the Week</Text>
          {this.renderDays()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16
  }
});

export default App;
