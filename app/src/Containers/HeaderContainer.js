/* @flow weak */

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import colors from '../styles/colors';
import Header from '../Components/Header';

const HeaderContainer = () => (
  <Header
    title={
      <Text style={styles.title}>
        CONNECTION
      </Text>
    }
    headerLeft={
      <EntypoIcons name='list' color={colors.white} size={25} />
    }
    headerRight={
      <EntypoIcons name='dots-three-horizontal' color={colors.white} size={25} />
    }
    style={{ elevation: 0, backgroundColor: colors.primary, height: 55 }}
  />
);

export default HeaderContainer;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
