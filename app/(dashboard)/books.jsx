import { Alert, FlatList, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { useBooks } from '../../hooks/useBooks'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedLoader from '../../components/ThemedLoader'

const books = () => {
  const { books, fetchBooks, updateBook, deleteBook } = useBooks()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  useFocusEffect(
    useCallback(() => {
      let active = true
      ;(async () => {
        setLoading(true)
        setError(null)
        try {
          await fetchBooks()
        } catch (e) {
          if (active) setError(e.message ?? 'Could not load books')
        } finally {
          if (active) setLoading(false)
        }
      })()
      return () => {
        active = false
      }
    }, [fetchBooks])
  )

  const startEdit = (book) => {
    setEditingId(book.$id)
    setTitle(book.title ?? '')
    setAuthor(book.author ?? '')
    setDescription(book.description ?? '')
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  const saveEdit = async () => {
    if (!editingId) return
    setError(null)
    try {
      await updateBook(editingId, { title, author, description })
      setEditingId(null)
    } catch (e) {
      setError(e.message ?? 'Could not update')
    }
  }

  const confirmDelete = (bookId) => {
    Alert.alert('Delete book?', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          setError(null)
          try {
            await deleteBook(bookId)
            if (editingId === bookId) setEditingId(null)
          } catch (e) {
            setError(e.message ?? 'Could not delete')
          }
        },
      },
    ])
  }

  if (loading && books.length === 0) {
    return <ThemedLoader />
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer height={20} />
      <ThemedText style={styles.pageTitle}>My Books</ThemedText>
      <Spacer height={12} />
      {error ? <ThemedText style={styles.error}>{error}</ThemedText> : null}

      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <ThemedText style={styles.subtitle}>No books yet</ThemedText>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            {editingId === item.$id ? (
              <View style={styles.cardRow}>
                <View style={styles.cardLeft}>
                  <ThemedTextInput
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                  />
                  <Spacer height={8} />
                  <ThemedTextInput
                    placeholder="Author"
                    value={author}
                    onChangeText={setAuthor}
                    style={styles.input}
                  />
                  <Spacer height={8} />
                  <ThemedTextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                  />
                </View>
                <View style={styles.cardRight}>
                  <ThemedButton onPress={saveEdit}>
                    <ThemedText style={styles.btnLight}>Save</ThemedText>
                  </ThemedButton>
                  <Spacer height={8} />
                  <ThemedButton onPress={cancelEdit}>
                    <ThemedText style={styles.btnLight}>Cancel</ThemedText>
                  </ThemedButton>
                </View>
              </View>
            ) : (
              <View style={styles.cardRow}>
                <View style={styles.cardLeft}>
                  <ThemedText style={styles.bookTitle}>{item.title}</ThemedText>
                  <ThemedText style={styles.meta}>{item.author}</ThemedText>
                  {item.description ? (
                    <ThemedText style={styles.desc} numberOfLines={4}>
                      {item.description}
                    </ThemedText>
                  ) : null}
                </View>
                <View style={styles.cardRight}>
                  <ThemedButton onPress={() => startEdit(item)}>
                    <ThemedText style={styles.btnLight}>Edit</ThemedText>
                  </ThemedButton>
                  <Spacer height={8} />
                  <ThemedButton onPress={() => confirmDelete(item.$id)}>
                    <ThemedText style={styles.btnLight}>Delete</ThemedText>
                  </ThemedButton>
                </View>
              </View>
            )}
          </View>
        )}
      />
    </ThemedView>
  )
}

export default books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
  },
  error: {
    color: 'red',
    marginBottom: 8,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  list: {
    paddingBottom: 100,
    paddingHorizontal: 12,
    width: '100%',
    flexGrow: 1,
  },
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'transparent',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    gap: 12,
  },
  cardLeft: {
    flex: 1,
    minWidth: 0,
  },
  cardRight: {
    justifyContent: 'center',
    alignItems: 'stretch',
    minWidth: 100,
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  meta: {
    marginTop: 4,
    opacity: 0.85,
  },
  desc: {
    marginTop: 8,
  },
  input: {
    width: '100%',
    minHeight: 40,
  },
  btnLight: {
    color: 'white',
  },
})
