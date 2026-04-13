import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { colors } from '../../constants/colors'
import GuestOnly from '../../components/auth/GuestOnly'


const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
  return (
    <GuestOnly>
      <StatusBar style="auto" />
       <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </GuestOnly>
    )
}

export default RootLayout