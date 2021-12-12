import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
        <ScrollView>
        <View style={styles.card}>
          <Text style={styles.headline}>Spółdzielnia</Text>
          <Text style={styles.cardBody}>
            22.12.21 - spotkanie wspólnoty mieszkaniowej
            “Miedziana” . Zapraszamy wszystkich mieszkańców o godz. 
            19:00, siedziba administracji. 
          </Text>
          <Image style={styles.heart} resizeMode={'contain'} source={require('../assets/images/heart.png')} />
          <Image style={styles.comment} resizeMode={'contain'} source={require('../assets/images/comment.png')} />
        </View>
        <View style={styles.card2}>
          <Text style={styles.headline}>Zażalenie</Text>
          <Text style={styles.cardBody}>
            Wielka prośba do sąsiada o przestawienie samochodu przy ul. Miedzianej.
          </Text>
          <Image style={styles.carImage} resizeMode={'contain'} source={require('../assets/images/car.png')} />
          <Image style={styles.heart} resizeMode={'contain'} source={require('../assets/images/heart.png')} />
          <Image style={styles.comment} resizeMode={'contain'} source={require('../assets/images/comment.png')} />
        </View>
        </ScrollView>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    backgroundColor: '#F49819',
    height: 220,
    width: 314,
    borderRadius: 16,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  headline: {
    color: '#FFFDFD',
    textAlign: 'center'
  },
  cardBody: {
    color: '#FFFDFD',
    position: 'absolute',
    left: 15,
    top: 50
  },
  card2: {
    backgroundColor: '#F49819',
    height: 330,
    width: 314,
    borderRadius: 16,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative'
  },
  logoImage: {
    width: 340,
    marginTop: 30
  },
  carImage: {
    marginTop: 100,
    borderRadius: 8
  },
  heart: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  comment: {
    position: 'absolute',
    bottom: 10,
    right: 40
  }
});
