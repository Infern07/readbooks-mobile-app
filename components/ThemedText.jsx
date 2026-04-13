import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';

const ThemedText = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <Text style={[{color: theme.text},style]} {...props} />
  )
}
export default ThemedText