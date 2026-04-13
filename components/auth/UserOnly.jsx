import { useUser } from '../../hooks/UseUser'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import ThemedText from '../ThemedText'
import ThemedLoader from '../ThemedLoader'

const UserOnly = ({children}) => {
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && !user) {
            router.replace('/login')
        }
    }, [authChecked, user, router])

    if (!authChecked) {
        return <ThemedLoader />
    }
    if (!user) {
        return <ThemedLoader />
    }
    return children
}

export default UserOnly