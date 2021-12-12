import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function DetailScreen({ navigation }: RootStackScreenProps<'Detail'>) {
  return (
    <View style={styles.container}>
        <Button title='back' onPress={() => navigation.replace('Root')}></Button>
        <Button title='Contact' onPress={() => navigation.replace('Contact')}></Button>
        <Text>DETAIL</Text>
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