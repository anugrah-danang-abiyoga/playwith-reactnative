import React, {component} from 'react';
import {Stylesheet, View, Image} from 'react-native';

export default class Login extends component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image></Image>
                </View>
            <View>
                <View style={styles.formContainer}>
            </View>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    container: {
        flex:1,
        backgroundColor: '#1a75ff'
    }
})