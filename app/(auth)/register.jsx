import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native' 
//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/UseUser'
 
const register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, register } = useUser()
    const [error, setError] = useState(null)
    const handleRegister = async () => {
        setError(null)
        try{
            await register(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
        <Spacer height={20} />
        <ThemedText style={styles.title}>Register Your Account</ThemedText>
        <Spacer height={20} />
        <ThemedTextInput style={{width: '60%', height: 40}} 
            placeholder="Enter your email" 
            keyboardType="email-address" 
            onChangeText={setEmail} value={email}/>
        <Spacer height={20} />
        <ThemedTextInput style={{width: '60%', height: 40}} 
            placeholder="Create Password" 
            secureTextEntry={true}
            onChangeText={setPassword} value={password}/>
        <Spacer height={20} />
        <ThemedButton onPress={handleRegister}><ThemedText style={{color: 'white'}}>Register</ThemedText></ThemedButton>
        <Spacer height={20} />
        <Link href="/login" style={{textAlign:'center', textDecorationLine: 'underline'}}><ThemedText>Login instead?</ThemedText></Link>
        {error && <ThemedText style={{color: 'red', textAlign: 'center'}}>{error}</ThemedText>}
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register

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