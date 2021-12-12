import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';

import { RootStackScreenProps } from '../types';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function DetailScreen({ navigation }: RootStackScreenProps<'Detail'>) {
  return (
    <View style={styles.container}>
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
  backButton: {
    borderRadius: 16,
    backgroundColor: '#F49819',
    borderWidth: 1,
    borderColor: '#F49819',
    width: 90,
    height:32,
    justifyContent: 'center',
    alignItems: 'center'
}
});