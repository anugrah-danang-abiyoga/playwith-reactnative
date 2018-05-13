import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from './LoginForm'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* <Image 
            style={styles.logo}
            // source={require('./images/blue-whale.jpg')}
          /> */}
          <Text style={styles.title}>Diving into react-native</Text>
        </View>
        <View style={styles.formContainer}> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a75ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  }
  // title: {
  //   color: '#FFF',
  //   marginTop: 10,
  //   width: 160,
  //   textAlign: 'center',
  //   opacity: 0.9
  // }
})