// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Wear Wise</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Home from './Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7B7A4',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#B7B7A4',
    color: '#fff',
  },
  buttonText: {
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
   
  }
})

const App: React.FC = () => {
  const handlePress = () => {
    console.log('button pressed!')
  }

  return (
    <View style={styles.container}>
      <Home />
      {/* <View style={styles.flexContainer}> */}
        {/* <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </View>
  )
}

export default App
