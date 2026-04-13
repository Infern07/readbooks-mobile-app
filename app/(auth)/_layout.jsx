import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { colors } from '../../constants/colors'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <>
      <StatusBar style="auto" />
       <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>
    )
}

export default RootLayout