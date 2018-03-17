/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../styles/colors';

const TabBar = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name='folder-outline' color={colors.primaryTransparent} size={30} />
    <MaterialCommunityIcons name='lan' color={colors.primary} size={30} />
    <EntypoIcons name='signal' color={colors.primaryTransparent} size={30} />
  </View>
);

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.white,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});
