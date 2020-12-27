import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Tag from './Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import FixedBottom from './FixedBottom'

export default function Navbar() {
    return (
        <View>
            <FixedBottom>
                <Text style={styles.navbar}>This is NAVBAR</Text>
            </FixedBottom>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        borderStyle: "solid",
        borderColor: '#D7D7D7',
    }
})
