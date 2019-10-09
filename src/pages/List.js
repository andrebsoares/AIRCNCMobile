import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import { SafeAreaView, StyleSheet, ScrollView, Image, AsyncStorage, Alert } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.103:8080', {
                query: { user_id }
            })                        

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} 
                             foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}` )
            })
            
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storegedTechs => {
            const techsArray = storegedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <Image style={style.logo} source={logo} />

            {/* Scrol vertical: ScrollView, scrol lateral: FlatList */}
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 30,
    }
});