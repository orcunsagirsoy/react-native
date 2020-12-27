import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from "react-native";
import Logo from '../assets/dahadahaLogo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../assets/dahadahaLogo.PNG')} />
            </View>
            <View style={styles.loginContainer}>

                <View>

                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={styles.TextStyle}> Giriş Yap </Text>     
                    </TouchableOpacity>

                </View>

                <View>
                    <FontAwesomeIcon size="3x" icon={faUserCircle} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40
    },

    loginContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 15
        
    },

    logo: {
        marginLeft: 15,
        width: 90,
        height: 45,
        
      
    },

    button: {
        width: 100,
        height: 47,
        backgroundColor: 'red',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },

    TextStyle: {
        color:'#fff',
        textAlign:'center',
    }
  });