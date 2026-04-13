import { StyleSheet, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import React from 'react'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.logo} />
      <Spacer height={20} />
      <ThemedText style={styles.title}>Welcome to the app</ThemedText>
      <Spacer height={20} />
      <Link href="/login" style={styles.button}>Go to Login Page</Link>
      <Link href="/register" style={styles.button}>Go to Register Page</Link>
      <Link href="/profile" style={styles.button}>Go to Profile Page</Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
  },
})