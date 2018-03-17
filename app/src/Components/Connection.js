/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';

const item = () => (
  <View>
    <View
      style={styles.circle}
    />
    <View
      style={[styles.circle, { top: 30 }]}
    />
    <View
      style={styles.line}
    />
  </View>
);

const Connection = () => (
  <View style={styles.container}>
    {item()}
    {item()}
  </View>
);

export default Connection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '83%',
    height: 55,
    marginTop: -20,
    marginBottom: -20,
    elevation: 3,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  line: {
    position: 'absolute',
    top: 3,
    left: 3,
    width: 6,
    height: 48,
    borderRadius: 3,
    backgroundColor: '#F3F3FF',
  },
});
