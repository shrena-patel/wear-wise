import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#6B705C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFE8D6',
    textTransform: 'uppercase',
    marginBottom: 16,
    marginTop: '50%'
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#B7B7A4',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFE8D6',
    textAlign: 'center',
  },
  signUpButtonText: {
    color: '#FFE8D6',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#CB997E',
    marginTop: 50,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5
  }
});

const Home = (props: any) => {
  console.log(props,'porps')
  const handlePress = () => {
    console.log('button pressed!')
  }
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Wear Wise</Text>
      <Text style={styles.subtitle}>Your personal wardrobe tracker</Text>
      <Pressable style={styles.button} onPress={() => {
        props.navigation.navigate('Login')
      }}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.signUpButton} onPress={handlePress}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </Pressable>
    </View>
  );
};

export default Home;