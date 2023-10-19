import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // You can add your login logic here
    if (username === 'test' && password === 'test') {
      // Successful login
      alert('Login successful')
    } else {
      // Failed login
      alert('Login failed. Please check your credentials.')
    }
  }

  return (
    <>
      <View style={styles.container}>
      <Icon.Button
        name="shopping-bag"
        backgroundColor='#FFE8D6'
        color='#6B705C'
        size={120}
        style={{ alignSelf: 'center' }}
      />
      <Text style={styles.title}>Wear Wise</Text>
      <Text style={styles.subtitle}>Your personal wardrobe tracker</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFE8D6',
    fontFamily: 'Montserrat',
    fontSize: 50,
  },
  formContainer: {
    // backgroundColor: 'blue',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#6B705C',
    fontFamily: 'Montserrat_400Regular',
  },
  input: {
    height: 40,
    borderColor: '#6B705C',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: '#6B705C',
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    backgroundColor: '#6B705C',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFE8D6',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B705C',
    textTransform: 'uppercase',
    marginBottom: 16,
    marginTop: '20%',
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B705C',
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    marginBottom: 40
  },
})

export default LoginScreen
