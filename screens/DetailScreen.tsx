import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const avatar1 = require('../assets/images/avatar1.png');
const hero2 = require('../assets/images/hero2.png');

import { RootStackScreenProps } from '../types';

export default function DetailScreen({ navigation }: RootStackScreenProps<'Detail'>) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainerPart}>
        <Image source={avatar1} style={styles.avatar}/>
        <View>
            <Text style={styles.text1}>Zofia</Text>
            <Text>600 metrów stąd</Text>
        </View>
      </View>
      <View style={styles.card}>
          <Text style={styles.typeText}>Pożyczę</Text>
          <FontAwesome name="user" style={styles.userIcon}/>
          <Text style={styles.username}>sąsiadka Zofia</Text>
          <Text style={styles.postText}>
            Hej, Chętnie pożyczę na weekend parownicę do ubrań w zamian za szarlotkę. 
          </Text>
          <Image source={hero2} style={styles.postPhoto}/>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.replace('Root')}>
            <View style={styles.backButton}>
                <Text>Back</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace('Contact')}>
            <View style={styles.backButton}>
                <Text>Contact</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 29,
    borderColor: '#F49819',
    borderWidth: 1,
    height: 306,
  },
  typeText: {
    color: '#F49819',
    marginTop: 14,
    marginLeft: 17,
    textDecorationLine: 'underline',
  },
  userIcon: {
    marginTop: 16,
    marginLeft: 17
  },
  username: {
    position: 'absolute',
    top: 43,
    left: 37,
    fontSize: 14,
    color: 'black'
  },
  avatar: {
    alignSelf: 'flex-start',
    borderRadius: 65,
    backgroundColor: 'black'
  },
  postText: {
    fontSize: 14,
    maxWidth: 280,
    marginTop: 20,
    marginLeft: 17,
    color: 'black'
  },
  postPhoto: {
    backgroundColor: 'white',
    top: 20,
    width: 314,
    height: 171,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 29,
    borderBottomLeftRadius: 29
  },
  upperContainerPart: {
    display: 'flex',
    flexDirection: 'row',
    height: 150
  },
  text1: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24
  },
  backButton: {
    borderRadius: 16,
    backgroundColor: '#F49819',
    borderWidth: 1,
    borderColor: '#F49819',
    width: 90,
    height:32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
  }
});