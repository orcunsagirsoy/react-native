import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { Card, ListItem, Icon } from "react-native-elements";
import PromoCard from "./PromoCard";

export default function Carousel(props) {
    console.log(props.data);
  return (
    <View style={styles.container}>
      {props.data ? (
        props.data.map((promo) => 
          (<PromoCard img={promo.ImgUrl} title={promo.Title} />
          ))    
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10
    }
})
