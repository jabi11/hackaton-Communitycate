import * as React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { CardNoHero } from '../components/CardNoHero';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
  const avatar1 = require('../assets/images/avatar6.png');
  const avatar2 = require('../assets/images/avatar10.png');
  const avatar3 = require('../assets/images/avatar8.png')

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
      <ScrollView>
        <CardNoHero username='sąsiadka Kasia' avatar={avatar1} post='Cześć,
Wymienię się miejscami parkingowymi na stałe, żeby miec bliżej do swojego mieszkania.'/>
        <CardNoHero username='sąsiad Krzysztof' avatar={avatar2} post='Hej,
Rzadko używam swojego termomixa i chętnie pożyczę, jakby ktoś potrzebował. '/>
        <CardNoHero username='sąsiadka Krystyna' avatar={avatar3} post='Witajcie sąsiedzi,
        Chciałabym się z kimś wymienić kiszonkami.'/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
