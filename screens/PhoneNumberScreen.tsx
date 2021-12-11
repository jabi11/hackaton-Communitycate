import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function PhoneNumberScreen({ navigation }: RootStackScreenProps<'PhoneNumber'>) {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('../assets/images/phoneNumberBg.png')} resizeMode="cover">
            <Image style={styles.image} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
            <View style={styles.phoneNumberContainer}>
                <Text style={styles.registerText}>Register with phone number</Text>
                <TextInput style={styles.phoneNumberInput}></TextInput>
                <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.link}>
                    <Text style={styles.linkText}>Go to AUTH screen!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImage:  {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    paddingVertical: 15,
    left: 90
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  image: {
      position: 'absolute',
      width: 340,
      top: 120,
      left: 20
  },
  phoneNumberContainer: {
      position: 'absolute',
      top: 220,
      left: 40,
      borderRadius: 54,
      width: 314,
      height: 218,
      backgroundColor: 'rgba(247, 247, 247, 0.65)',
  },
  registerText: {
      position: 'relative',
      top: 50,
      left: 60
  },
  phoneNumberInput: {
      position: 'relative',
      marginTop: 84,
      marginLeft: 48,
      width: 220,
      height: 48,
      borderRadius: 54,
      backgroundColor: 'rgba(255, 255, 255, 0.65)'
  }
});
