import React, { useState, useEffect } from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Tags from '../components/Tags'
import { encode } from "base-64";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";

export default function MainPage() {

    const [data, setData] = useState();

    let base64 = require('base-64');

    let url = 'https://testapi.dahadaha.com/api/promotions';
    let username = 'DevelopmentExam';
    let password = 'B3&~Dv7@AA/7sHN]=Aq^~EANAc~^4d$';

    let headers = new Headers();

   
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    useEffect(() => {
        fetch(url, {method:'GET',
        headers: headers,
            })
        .then(response => response.json())
        .then((data) => {
            setData(data)
        });
    }, [setData]);

    console.log(data)

    return (
        <View>
            <View style={styles.header}>
                <Header />
            </View>

            <Tags />
            <Carousel data={data}/>
            <Navbar />
            
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        display: 'flex',
    }
})