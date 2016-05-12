import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Days extends Component {

  onPress() {}

  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor={"grey"}
          onPress = {this.onPress.bind(this)}>
          <Text style = {[this.props.days === "Saturday" || this.props.days === "Sunday"  ? styles.weekendColor : styles.weekDayColor, styles.dayStyles]}>
            {this.props.days}
          </Text>
        </TouchableHighlight>
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
  },
  touched: {
    color: 'blue'
  }
});

export default Days;
