import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type GlobalStylesProps = {
  children: React.ReactNode
}
const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat_400Regular',
  },
})

export default GlobalStyles