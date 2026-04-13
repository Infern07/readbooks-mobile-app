import { createContext, useContext, useState } from 'react'
const DATABASE_ID = '69dc98610017bb1c515f'
const COLLECTION_ID = 'books'
import { useUser } from '../hooks/UseUser'
import { databases } from '../lib/appwrite'
import { ID, Permission, Role } from 'react-native-appwrite'

export const BooksContext = createContext()

export function BooksProvider({children}) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try{
        }
        catch (error) {
            console.error('Error fetching books:', error)
        }
    }

    async function createBook(data) {
        try{
            // Schema: title, author, description (see Appwrite collection attributes)
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
        }
        catch (error) {
            console.error('Error creating book:', error)
            throw error
        }
    }

    async function deleteBook(bookId) {
        try{
        }
        catch (error) {
            console.error('Error deleting book:', error)
        }
    }

    async function fetchBookById(bookId) {
        try{
        }
        catch (error) {
            console.error('Error fetching book by id:', error)
        }
    }
    
    return (
        <BooksContext.Provider value={{ books, fetchBooks, createBook, deleteBook, fetchBookById }}>
            {children}
        </BooksContext.Provider>
    )
}