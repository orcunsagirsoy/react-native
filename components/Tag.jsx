import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
const width = Dimensions.get('window').width
export default function Tag(props) {

    const brandNames = [ 'Coca-Cola', 'Fanta', 'Sprite', 'Fuse-Tea'];


    return (
      <View>
          <TouchableHighlight>
            <View style={styles.button}>
                <Image 
                    style={styles.logo}
                    source={{uri: `${props.logo}`}} />
                <Text style={styles.text}>{props.name}</Text>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
        button: {
          borderStyle: 'solid',
          borderColor: '#D7D7D7',
          borderWidth: 1,
          height: 35,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 10,
          flexDirection: "row",
          marginLeft: 10,
      },

      logo: {
          width: 24,
          height: 24,
          borderRadius: 10
      },

      text: {
        marginLeft: 5,
      }
  })