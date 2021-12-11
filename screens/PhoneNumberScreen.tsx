import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';

export default function PhoneNumberScreen({ navigation }: RootStackScreenProps<'PhoneNumber'>) {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('../assets/images/phoneNumberBg.png')} resizeMode="cover">
            <Image style={styles.image} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
            <View style={styles.phoneNumberContainer}>
                <Text style={styles.registerText}>Register with phone number</Text>
                <View style={styles.phoneNumberInputContainer}>
                    <Text style={styles.countryCode}>+48</Text>
                    <TextInput keyboardType={'phone-pad'} style={styles.phoneNumberInput}/>
                </View>
                <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.nextButton}>
                    <Ionicons size={24} name={'chevron-forward-outline'}/>
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
  nextButton: {
    marginTop: 20,
    marginBottom: 20,
    left: 130,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
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
  phoneNumberInputContainer: {
      position: 'relative',
      flex:1,
      flexDirection: 'row',
      marginTop: 84,
      marginLeft: 48,
      maxWidth: 220,
      maxHeight: 48,
      borderRadius: 54,
      backgroundColor: 'rgba(255, 255, 255, 0.65)'
  },
  phoneNumberInput: {
    marginTop: -5,
    width: 190,
    height: 48
  },
  countryCode: {
      fontSize: 12,
      marginTop: 12,
      marginLeft: 10
  }
});
