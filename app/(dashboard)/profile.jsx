import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '../../hooks/UseUser' 
//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const profile = () => {
    const { logout, user } = useUser()
  return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Welcome, {user?.email ?? 'User'}</ThemedText>
      <Spacer height={20} />
      <ThemedText style={styles.title}>Profile</ThemedText>
      <Spacer/>
      <ThemedButton onPress={() => {logout()}}>
        <ThemedText style={{color: 'white'}}>Logout</ThemedText>
      </ThemedButton>
    </ThemedView>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})