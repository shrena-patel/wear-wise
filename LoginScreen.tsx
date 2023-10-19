import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your login logic here
    if (username === 'test' && password === 'test') {
      // Successful login
      alert('Login successful');
    } else {
      // Failed login
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFE8D6',
    fontFamily: "Montserrat",
    fontSize: 50,
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
    borderRadius: 5
  },
  buttonText: {
    color: '#FFE8D6',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  }
});

export default LoginScreen;