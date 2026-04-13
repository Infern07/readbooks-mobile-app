import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const  ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <View
        style={[{backgroundColor: theme.background},styles.card,
        style]}
        {...props}
    />

  )
}

export default  ThemedCard

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})