import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';

export default function ContactScreen({ navigation }: RootStackScreenProps<'Contact'>) {

    const picture = require('../assets/images/avatar1.png');

  return (
    <View style={styles.container}>
        <Image style={styles.profile} source={picture}/>
      <Text style={styles.nameText}>sąsiadka Zofia</Text>
      <View style={styles.profileCard}>
          <Text style={styles.infoText}>Info</Text>
          <FontAwesome style={styles.phoneIcon} name='phone' size={24}/>
          <Text style={styles.phoneText}>+48 202 315 771</Text>
          <FontAwesome style={styles.phoneIcon} name='home' size={24}/>
          <Text style={styles.adressText}>ul. Miedziana 20, klatka A, m10 </Text>
          <FontAwesome style={styles.heartIcon} name='heart' size={24}/>
          <Text style={styles.adressText}>koty, ogrodnictwo,{'\n'}podróżowanie,{'\n'}pieczenie ciast</Text>
      </View>
        <TouchableOpacity onPress={() => navigation.replace('Detail')}>
            <View style={styles.backButton}>
                <Text>Back</Text>
            </View>
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
  backButton: {
      marginTop: 10,
      borderRadius: 16,
      backgroundColor: '#F49819',
      borderWidth: 1,
      borderColor: '#F49819',
      width: 90,
      height:32,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  profile: {
    width: 140,
    height: 140,
    top: 73
  },
  nameText: {
    width: 178,
    height: 36,
    fontSize: 24,
    marginTop: 120
  },
  profileCard: {
    marginTop: 35,
    width: 314,
    height: 382,
    borderRadius: 29,
    borderColor: '#F49819',
    borderWidth: 1
  },
  infoText: {
    fontSize: 18,
    top: 41,
    left: 142,
  },
  editIcon: {
    width: 16,
    height: 16,
    top: 25,
    left: 180
  },
  phoneIcon: {
    top: 50,
    left: 50
  },
  phoneText: {
    top: 30,
    left: 120
  },
  adressText: {
    top: 30,
    left: 90
  },
  heartIcon: {
    top: 60,
    left: 50
  },
  addButton: {
    top: 90,
    left: 120,
    borderRadius: 16,
    backgroundColor: '#F49819',
    width: 90,
    height: 32
  },
  plusIcon: {
    marginLeft: 35,
    marginTop: 5,

  }
});
