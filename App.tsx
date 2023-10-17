import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import LoginScreen from './LoginScreen'

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7B7A4',
    fontFamily: "Montserrat_500Medium",
    fontSize: 50,
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
    fontFamily: "Montserrat_500Medium",
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  navigation: {
    backgroundColor: 'blue'
  },
  text: {
    fontFamily: 'Montserrat_500Medium',

  }
})

const Stack = createStackNavigator()

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    console.log('button pressed!')
  }

  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App
















// This was in App.js
// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// export default function App() {
//     return (_jsxs(View, { style: styles.container, children: [_jsx(Text, { children: "Open up App.js to start working on your app!" }), _jsx(StatusBar, { style: "auto" })] }));
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });