import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { colors } from '../constants/colors';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { client } from '../lib/appwrite';
import { UserProvider } from '../contexts/UserContext';
import { BooksProvider } from '../contexts/BooksContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme ?? 'light'];

  useEffect(() => {
    client.ping().catch((err) => {
      console.warn('[Appwrite] Ping failed:', err);
    });
  }, []);

  return (
    <UserProvider>  
    <BooksProvider>
        <StatusBar value="auto" />
        <Stack screenOptions={{ 
          headerStyle: {backgroundColor: theme.background},
          headerTintColor: theme.text,
          headerTitleStyle: {color: theme.text},
        }}>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </BooksProvider>
    </UserProvider>
  );
}