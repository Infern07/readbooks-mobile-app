import { createContext, useCallback, useContext, useState } from 'react'
const DATABASE_ID = '69dc98610017bb1c515f'
const COLLECTION_ID = 'books'
import { useUser } from '../hooks/UseUser'
import { databases } from '../lib/appwrite'
import { ID, Permission, Role } from 'react-native-appwrite'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    const fetchBooks = useCallback(async () => {
        const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
        setBooks(res.documents)
    }, [])

    const createBook = useCallback(
        async (data) => {
            const payload = {
                title: data.title,
                author: data.author,
                description: data.description ?? '',
            }
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                payload,
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        },
        [user]
    )

    const updateBook = useCallback(async (bookId, data) => {
        const payload = {
            title: data.title,
            author: data.author,
            description: data.description ?? '',
        }
        const updated = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            bookId,
            payload
        )
        setBooks((prev) => prev.map((b) => (b.$id === bookId ? updated : b)))
    }, [])

    const deleteBook = useCallback(async (bookId) => {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, bookId)
        setBooks((prev) => prev.filter((b) => b.$id !== bookId))
    }, [])

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, createBook, updateBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    )
}