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
        <Text style = {[this.props.days === "Saturday" || this.props.days === "Sunday"  ? styles.weekendColor : styles.weekDayColor, styles.dayStyles]}>

          {this.props.days}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  weekDayColor: {
    color: 'orange'
  },
  weekendColor: {
    color: 'green',
  },
  dayStyles: {
    fontSize: 18,
    lineHeight: 24
  }
});

export default Days;
