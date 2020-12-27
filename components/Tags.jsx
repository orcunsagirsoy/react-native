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

const tagsData = [
    {
        brandName: 'Coca-Cola',
        brandLogo: 'https://test.dahadaha.com/content/images/378e35bc-6f40-437d-9c74-4ade67d02f1a.png',
    },
    {
        brandName: 'Fanta',
        brandLogo: 'https://test.dahadaha.com/content/images/66da5841-3805-4653-8a00-57e658668d75.png',
    },
    {
        brandName: 'Sprite',
        brandLogo: 'https://test.dahadaha.com/content/images/aa30c859-408e-46ba-b409-04e10629a931.png',
    },
    {
        brandName: 'Fuse-Tea',
        brandLogo: 'https://test.dahadaha.com/content/images/e84fe2a3-8f7e-454f-898d-75064ee2ee1a.jpeg',
    },
]

export default function Tags() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.searchLogo}>
          <FontAwesomeIcon icon={faSearch} />
        </View>
        <Text style={styles.searchText}>Fırsat Bul</Text>
      </View>
        {tagsData.map(tag => <Tag name={tag.brandName} logo={tag.brandLogo}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'flex-start',
        height: 35,
        flexDirection: 'row',
        
    },

    searchBox: {
      marginLeft: 15,
      borderStyle: 'solid',
      borderColor: '#D7D7D7',
      borderWidth: 1,
      height: 35,
      padding: 10,
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: "row"
    },  

    searchLogo: {
      width: 24,
      height:24,
      backgroundColor: 'red',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',

    },

    searchText: {
      marginLeft: 5,
      
    }
})
