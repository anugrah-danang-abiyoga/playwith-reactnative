import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

export default class LoginForm extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                placeholder="username"
                placeholderTextColor="#FFF"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                style={styles.input}
                />
                <TextInput
                placeholder="password"
                placeholderTextColor="#FFF"
                returnKeyType="go"
                secureTextEntry
                style={styles.input}
                ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 20
    }
})