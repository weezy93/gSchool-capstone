import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Days extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.fontStyle}>
          {this.props.days}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 18,
    marginBottom: 12
  }
});

export default Days;
