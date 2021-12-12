import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export const Card = (props: any) => 
        <View style={styles.card}>
            <Text style={styles.typeText}>Pozycze</Text>
            <FontAwesome name="user" style={styles.userIcon}/>
            <Text style={styles.username}>sąsiadka Zofia</Text>
            <Image source={require('../assets/images/avatar1.png')} style={styles.avatar}/>
            <Text style={styles.postText}>Hej, Chętnie pożyczę na weekend parownicę do ubrań w zamian za szarlotkę.</Text>
            <Image source={require('../assets/images/hero2.png')} style={styles.postPhoto}/>
        </View>

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        width: 314,
        height: 306,
        backgroundColor: 'white',
        borderRadius: 29,
        borderColor: '#F49819',
        borderWidth: 1
    },
    typeText: {
        color: '#F49819',
        marginTop: 14,
        marginLeft: 17
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
        position: 'absolute',
        top: 18,
        right: 12,
        width: 62,
        height: 62,
        borderRadius: 31,
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
        backgroundColor: 'blue',
        top: 20,
        width: 314,
        height: 171,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        borderBottomRightRadius: 29,
        borderBottomLeftRadius: 29
    }


});