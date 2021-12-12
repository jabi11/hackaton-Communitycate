import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const avatar1 = require('../assets/images/avatar1.png');
const hero1 = require('../assets/images/hero2.png');
const hero2 = require('../assets/images/hero_dog.png');
const avatar2 = require('../assets/images/avatar7.png');

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>wyszukaj</Text>
        <FontAwesome style={styles.searchIcon} size={24} name='search'/>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.replace('Detail')}>
          <Card username='Sasiadka Zofia' hero={hero1} avatar={avatar1}
          post={'Hej, Chętnie pożyczę na weekend parownicę do ubrań w zamian za szarlotkę.'} text1={'Pozycze'}        />
        </TouchableOpacity>
        <Card text1='Potrzebuje' username='sąsiad Krzysztof' hero={hero2} avatar={avatar2} 
        post={'Dzien dobry, obecnie znajduję się na kwarantannie  od  10.12 do 17.12 i potrzebuję pomocy w wyprowadzaniu psa. '}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
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
  logoImage: {
    width: 340,
    marginTop: 30
  },
  searchBar: {
    maxWidth: 314,
    width: 314,
    height: 37,
    maxHeight: 37,
    borderRadius: 16,
    borderColor: '#7A7878',
    borderWidth: 1,
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    top: 3
  },
  searchText: {
    position: 'absolute',
    top: 8,
    left: 10,
    color: '#7A7878'
  },
});
