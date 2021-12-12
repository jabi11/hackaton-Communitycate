import { View, StyleSheet, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export interface CardProps {
    username: string,
    avatar: ImageSourcePropType,
    post: string
}

export const CardNoHero = (props: CardProps) => 
        <View style={styles.card}>
            <FontAwesome name="user" style={styles.userIcon}/>
            <Text style={styles.username}>{props.username}</Text>
            <Image source={props.avatar} style={styles.avatar}/>
            <Text style={styles.postText}>{props.post}</Text>
        </View>

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 29,
        borderColor: '#F49819',
        borderWidth: 1,
        height: 250,
        width: 314
    },
    typeText: {
        color: '#F49819',
        marginLeft: 17
    },
    userIcon: {
        marginTop: 16,
        marginLeft: 17
    },
    username: {
        position: 'absolute',
        top: 15,
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
        marginTop: 50,
        marginLeft: 17,
        color: 'black'
    },
});