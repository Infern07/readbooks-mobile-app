import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const books = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer height={20} />
      <ThemedText style={styles.title}>My Books</ThemedText>
      <Spacer/>
      <ThemedText style={styles.subtitle}>No books found</ThemedText>
    </ThemedView>
  )
}

export default books

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