import { StyleSheet, Text, View, useColorScheme, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <TextInput style={[{
        backgroundColor: theme.uibg,
        color: theme.text,
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.text,
    },style]} {...props} />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})