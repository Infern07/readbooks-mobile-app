import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const create = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer height={20} />
      <ThemedText style={styles.title}>Add a new book</ThemedText>
      <Spacer/>
      <ThemedButton onPress={() => {}}><ThemedText style={{color: 'white'}}>Create</ThemedText></ThemedButton>
    </ThemedView>
  )
}

export default create

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