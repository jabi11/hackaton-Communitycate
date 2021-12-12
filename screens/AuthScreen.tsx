import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';

export default function PhoneNumberScreen({ navigation }: RootStackScreenProps<'PhoneNumber'>) {
  return (
    <View style={styles.container}>
            <Image style={styles.image} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
            <View style={styles.phoneNumberContainer}>
                <Text>Enter your verification code</Text>
                <View style={styles.codeContainer}>
                    <View style={styles.codeCell}>
                        <Text style={styles.codeCellText}>2</Text>
                    </View>
                    <View style={styles.codeCell}>
                        <Text style={styles.codeCellText}>1</Text>
                    </View>
                    <View style={styles.codeCell}>
                        <Text style={styles.codeCellText}>3</Text>
                    </View>
                    <View style={styles.codeCell}>
                        <Text style={styles.codeCellText}>7</Text>
                    </View>
                    <View style={styles.codeCell}>
                        <Text style={styles.codeCellText}>1</Text>
                    </View>
                </View>
                <Text style={styles.sendCodeText}>send my code again</Text>
            </View>
            <TouchableOpacity style={[styles.Button, styles.nextButton]} onPress={() => navigation.replace('Root')}>
                    <Text>dalej</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Button, styles.prevButton]} onPress={() => navigation.replace('PhoneNumber')}>
                    <Text>cofnij</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
      position: 'absolute',
      width: 340,
      top: 120,
      left: 20
  },
  phoneNumberContainer: {
      position: 'absolute',
      flex: 3,
      justifyContent: 'space-around',
      alignItems: 'center',
      top: 220,
      left: 40,
      borderRadius: 54,
      width: 314,
      height: 218,
      backgroundColor: 'rgba(247, 247, 247, 0.65)',
  },
  sendCodeText: {
      textDecorationLine: 'underline'
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
  codeContainer: {
      flex: 1,
      flexDirection: 'row',
      width: 208,
      maxHeight: 52,
  },
  codeCell: {
    minWidth: 32,
    minHeight: 52,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 12
  },
  codeCellText: {
      fontSize: 30
  },
  Button: {
      borderRadius: 54,
      width: 120,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#E5E5E5',
      borderWidth: 1
  },
  nextButton: {
    top: 150,
    left: 80,
    backgroundColor: '#F49819',
  },
  prevButton: {
    left: -60,
    top: 105
  }
});
