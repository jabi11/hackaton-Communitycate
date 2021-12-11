import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function PhoneNumberScreen({ navigation }: RootStackScreenProps<'PhoneNumber'>) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
        <View style={styles.phoneNumberContainer}>
            <Text style={styles.registerText}>Register with phone number</Text>
            <TextInput style={styles.phoneNumberInput}></TextInput>
            <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.link}>
                <Text style={styles.linkText}>Go to AUTH screen!</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
      top: 120
  },
  phoneNumberContainer: {
      position: 'absolute',
      top: 220,
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
