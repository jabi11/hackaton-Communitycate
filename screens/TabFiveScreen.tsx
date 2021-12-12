import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFiveScreen() {

  const picture = require('../assets/images/avatar11.png')

  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={picture}/>
      <Text style={styles.nameText}>Anita Kowalska</Text>
      <View style={styles.profileCard}>
          <Text style={styles.infoText}>Info</Text>
          <FontAwesome style={styles.editIcon} name='pencil' size={16}/>
          <FontAwesome style={styles.phoneIcon} name='phone' size={24}/>
          <Text style={styles.phoneText}>+48 656 788 545</Text>
          <FontAwesome style={styles.phoneIcon} name='home' size={24}/>
          <Text style={styles.adressText}>ul. Miedziana 20, klatka C m34</Text>
          <FontAwesome style={styles.heartIcon} name='heart' size={24}/>
          <Text style={styles.adressText}>książki science fiction, {'\n'}podróżowanie, pieczenie ciast,{'\n'} taniec</Text>
          <TouchableOpacity>
            <View style={styles.addButton}>
              <FontAwesome style={styles.plusIcon} name='plus' size={24} color={'white'}/>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
