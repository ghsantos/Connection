/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.headerLeft || <View />}
        {this.props.title || <View />}
        {this.props.headerRight || <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    height: 45,
    backgroundColor: '#7325A1',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
