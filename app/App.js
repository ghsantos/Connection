/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PercentageCircle from 'react-native-percentage-circle';

import colors from './src/styles/colors';
import HeaderContainer from './src/Containers/HeaderContainer';
import TabBar from './src/Components/TabBar';
import Connection from './src/Components/Connection';

const mobile = require('./src/images/mobile.png');

export default class App extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primary} />
        <HeaderContainer />

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: colors.primary }} />
          <View style={{ flex: 3 }} />

          <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <ScrollView>
              <View style={styles.subTitleContainer}>
                <View style={styles.subTitle}>
                  <Text style={styles.subTitleText}>
                    Phone
                  </Text>
                </View>

                <View style={styles.subTitle}>
                  <Text style={[styles.subTitleText, styles.subTitleTextSelect]}>
                    Tablet PC
                  </Text>
                </View>

                <View style={styles.subTitle}>
                  <Text style={styles.subTitleText}>
                    Computer
                  </Text>
                </View>
              </View>

              <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                <View style={styles.card}>
                  <Image
                    source={mobile}
                    style={{ width: 128, height: 136 }}
                  />

                  <View style={styles.percentageContainer}>
                    <View>
                      <PercentageCircle radius={18} percent={25} color={colors.primary}>
                        <Text style={styles.percentageText}>
                          25%
                        </Text>
                      </PercentageCircle>
                      <Text style={styles.textGrey}>video</Text>
                    </View>

                    <View>
                      <PercentageCircle radius={18} percent={75} color={colors.primary}>
                        <Text style={styles.percentageText}>
                          75%
                        </Text>
                      </PercentageCircle>
                      <Text style={styles.textGrey}>music</Text>
                    </View>

                    <View>
                      <PercentageCircle radius={18} percent={50} color={colors.primary}>
                        <Text style={styles.percentageText}>
                          50%
                        </Text>
                      </PercentageCircle>
                      <Text style={styles.textGrey}>picture</Text>
                    </View>
                  </View>
                </View>

                <Connection />

                <View style={styles.card}>
                  <SimpleLineIcons name='check' color={colors.primary} size={25} />

                  <Text
                    style={{ color: colors.primary, fontSize: 17, fontWeight: 'bold', margin: 5 }}
                  >Success</Text>

                  <Text style={styles.textGrey}>The mobile device is Connected</Text>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>

        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  subTitleContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    flex: 1,
    alignItems: 'center',
  },
  subTitleText: {
    color: colors.whiteTransparent,
  },
  subTitleTextSelect: {
    color: colors.white,
  },
  card: {
    width: '92%',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 2,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  textGrey: {
    color: colors.grey,
  },
  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10
  },
  percentageText: {
    fontSize: 10,
    color: colors.grey,
  },
});
