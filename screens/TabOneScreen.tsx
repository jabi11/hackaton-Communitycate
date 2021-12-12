import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card } from '../components/Card';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>wyszukaj</Text>
        <FontAwesome style={styles.searchIcon} size={24} name='search'/>
      </View>
      <Card>
        
      </Card>
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
  }
});
