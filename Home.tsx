import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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
    color: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    
  },
});

const Home = () => {

  const handlePress = () => {
    console.log('button pressed!')
  }
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Wear Wise</Text>
      <Text style={styles.subtitle}>Your personal wardrobe tracker</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Home;