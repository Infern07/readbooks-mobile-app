import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useBooks } from '../../hooks/useBooks'
import { useRouter } from 'expo-router'
import { useUser } from '../../hooks/UseUser'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedLoader from '../../components/ThemedLoader'
    
const create = () => {
    const { user } = useUser()
    const router = useRouter()
    const { createBook } = useBooks()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleCreateBook = async () => {
        setError(null)
        setLoading(true)
        try{
            await createBook({ title, author, description })
            router.push('/books')
            setLoading(false)
        }
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }
    if (error) {
        return <ThemedText style={{color: 'red'}}>{error}</ThemedText>
    }
    if (loading) {
        return <ThemedLoader />
    }
    return (
    <ThemedView style={styles.container}>
      <Spacer height={20} />
      <ThemedText style={styles.title}>Add a new book</ThemedText>
      <Spacer/>
      <ThemedTextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <Spacer/>
      <ThemedTextInput placeholder="Author" value={author} onChangeText={setAuthor} />
      <Spacer/>
      <ThemedTextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Spacer/>
      <ThemedButton onPress={() => {handleCreateBook()}}><ThemedText style={{color: 'white'}}>Create</ThemedText></ThemedButton>
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