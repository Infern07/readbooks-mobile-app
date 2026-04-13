import { StyleSheet, Text, View, Pressable, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import { useUser } from '../../hooks/UseUser'
//Themed Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedLogo from '../../components/ThemedLogo'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'



const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {user}=useUser()

    const { login } = useUser()
    const handleSubmit = async () => {
        setError(null)
        try{
            await login(email, password)
        } catch (error) {
            setError(error.message)
        }
    }
    
  return (
    <ThemedView style={styles.container}>

      <Spacer height={20} />
      <ThemedText style={styles.title}>Login To Your Account</ThemedText>
      <Spacer height={20} />

      <ThemedTextInput style={{width: '60%', height: 40}} 
      placeholder="Email" 
      keyboardType="email-address" 
      onChangeText={setEmail} value={email}/>
      <Spacer height={20} />

      <ThemedTextInput style={{width: '60%', height: 40}} placeholder="Password" secureTextEntry={true}
      onChangeText={setPassword} value={password}/>
      <Spacer height={20} />

      <ThemedButton onPress={() => {handleSubmit()}}><ThemedText style={{color: 'white'}}>Login</ThemedText></ThemedButton>
      <Spacer height={20} />
      {error && <ThemedText style={{color: 'red', textAlign: 'center'}}>{error}</ThemedText>}
      <Link href="/register" 
      style={{textAlign:'center', 
      textDecorationLine: 'underline'}}><ThemedText>Register instead?</ThemedText></Link>
    </ThemedView>
  )
}

export default login

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
    button: {
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold',
    },
})