import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function FixedBottom({ children }) {
    return (
        <View style={styles.container}>
            {children && React.cloneElement(children, {style: styles.btn})}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 67
    },

    btn: {
        height: '100%',
        justifyContent: 'center',
        borderStyle: "solid",
        borderColor: '#D7D7D7',
    }
})
