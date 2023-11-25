import React from 'react';
// Customizable Area Start
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
// Customizable Area End

import SplashscreenController, { Props } from './SplashscreenController';

import { appLogo } from './assets';
import Scale from '../../../components/src/Scale';

export default class Splashscreen extends SplashscreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  // Customizable Area Start
  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    return (
      <SafeAreaView style={styles.mainContainer}>
        {/* Customizable Area Start */}
        <View style={styles.logoView}>
          <Image
            source={appLogo}
            style={{ width: 100, height: 100 }}
            resizeMode='contain'
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottmText}>Welcome! Your News</Text>
          <Text style={styles.bottmText}>experience reimagined</Text>
        </View>
        {/* Customizable Area End */}
      </SafeAreaView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}
// Customizable Area Start
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 42,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#323441',
    marginTop: 15,
  },
  bottomView: {
    height: Scale(150),
    width: '100%',
    backgroundColor: 'blue',
    borderTopLeftRadius: Scale(25),
    borderTopRightRadius: Scale(25),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bottmText: {
    color: '#fff',
    fontSize: 16,
  },
});
// Customizable Area End
