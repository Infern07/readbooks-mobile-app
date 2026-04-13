import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Pressable } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const ThemedButton = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <Pressable style={({pressed}) => [styles.button, {backgroundColor: pressed ? 'darkblue' : 'blue'}, pressed && styles.pressed]} 
    {...props} />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.8,
    },
})