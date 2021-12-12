import { View, StyleSheet, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export interface CardProps {
    text1: string,
    username: string,
    avatar: ImageSourcePropType,
    hero: ImageSourcePropType,
    post: string
}

export const Card = (props: CardProps) => 
        <View style={styles.card}>
            <Text style={styles.typeText}>{props.text1}</Text>
            <FontAwesome name="user" style={styles.userIcon}/>
            <Text style={styles.username}>{props.username}</Text>
            <Image source={props.avatar} style={styles.avatar}/>
            <Text style={styles.postText}>{props.post}</Text>
            <Image source={props.hero} style={styles.postPhoto}/>
        </View>

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 29,
        borderColor: '#F49819',
        borderWidth: 1,
        height: 306,
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
        backgroundColor: 'white',
        top: 20,
        width: 314,
        height: 171,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        borderBottomRightRadius: 29,
        borderBottomLeftRadius: 29
    }



});