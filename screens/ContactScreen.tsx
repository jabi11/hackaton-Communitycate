import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';

export default function ContactScreen({ navigation }: RootStackScreenProps<'Contact'>) {
  return (
    <View style={styles.container}>
        <Button title='back' onPress={() => navigation.replace('Detail')}></Button>
        <Text>CONTACT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
