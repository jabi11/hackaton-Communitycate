import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function PhoneNumberScreen({ navigation }: RootStackScreenProps<'PhoneNumber'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone Number screen</Text>
      <TouchableOpacity onPress={() => navigation.replace('Auth')} style={styles.link}>
        <Text style={styles.linkText}>Go to AUTH screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
