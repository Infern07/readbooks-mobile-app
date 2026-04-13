import { View, ActivityIndicator, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import ThemedView from './ThemedView'

const ThemedLoader = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme ?? 'light']
    return (
        <ThemedView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
         }}>
            <ActivityIndicator size="large" color={theme.text} />
        </ThemedView>
    )
}


export default ThemedLoader