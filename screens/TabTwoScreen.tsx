import * as React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { CardNoHero } from '../components/CardNoHero';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const avatar1 = require('../assets/images/avatar3.png');
  const avatar2 = require('../assets/images/avatar4.png');
  const avatar3 = require('../assets/images/avatar5.png')

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} resizeMode={'contain'} source={require('../assets/images/communitycate.png')} />
      <ScrollView>
        <CardNoHero username='sasiad Jan' avatar={avatar1} post='Hej, 
  Jestem studentem PJATK i udzielam korepetycji z matematyki i informatyki. Zapraszam do kontaktu. Cena jest do dogadania.'/>
        <CardNoHero username='sasiad Jan' avatar={avatar2} post='Witam, czy dałby ktoś z was radę pomóc mi z wynoszeniem śmieci przez parę dni? Mam kwarantannę i nie mogę wyjść z domu :('/>
        <CardNoHero username='sasiad Jan' avatar={avatar3} post='Siema,
  Chętnie pomogę w małych pracach domowych,
  przy wynoszeniu śmieci, wyprowadzaniu psa,'/>
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
  logoImage: {
    width: 340,
    marginTop: 30
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
});
