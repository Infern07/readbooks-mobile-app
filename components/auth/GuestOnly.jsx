import { useUser } from '../../hooks/UseUser'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import ThemedText from '../ThemedText'

const GuestOnly = ({children}) => {
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user!==null) {
            router.replace('/profile')
        }
    }, [authChecked, user, router])

    if (!authChecked) {
        return <ThemedText>Loading...</ThemedText>
    }
    if (user) {
        return <ThemedText>Loading...</ThemedText>
    }
    return children
}

export default GuestOnly