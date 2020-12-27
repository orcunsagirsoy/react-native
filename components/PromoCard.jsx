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

export default function PromoCard(props) {
  
  console.log(props);
  return (
    <View>
      {props ? (
        <Card style={styles.card}>
          <Card.Image style={styles.cardImg} source={{ uri: `${props.img}` }}></Card.Image>
          <Text style={{ marginBottom: 10 }}>
            {props.title}
          </Text>
        </Card>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImg: {
    width: 270,
    height: 300,
  }
})
