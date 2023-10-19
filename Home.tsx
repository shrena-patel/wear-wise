import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#6B705C',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFE8D6',
    textTransform: 'uppercase',
    marginBottom: 16,
    marginTop: '20%',
    fontFamily: 'Montserrat_400Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#B7B7A4',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    textTransform: 'uppercase',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: pressed ? 0 : 5,
  },
  buttonText: {
    color: '#FFE8D6',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  signUpButtonText: {
    color: '#FFE8D6',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  signUpButton: {
    backgroundColor: '#CB997E',
    marginTop: 50,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5,
    textTransform: 'uppercase',
  },
})

const Home = (props: any) => {
  const handlePress = () => {
    console.log('button pressed!')
  }
  return (
    <View style={styles.homeContainer}>
      <Icon.Button
        name="shopping-bag"
        backgroundColor="#6B705C"
        color="#B7B7A4"
        size={120}
        style={{
          shadowColor: 'pink',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      ></Icon.Button>
      <Text style={styles.title}>Wear Wise</Text>
      <Text style={styles.subtitle}>Your personal wardrobe tracker</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Login')
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.signUpButton} onPress={handlePress}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </Pressable>
    </View>
  )
}

export default Home
