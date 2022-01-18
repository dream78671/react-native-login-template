import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    
    
    TouchableOpacity,
} from "react-native";
import TextInput from '../components/TextInput'

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
//import { StatusBar } from "expo-status-bar";
import api from '../Api';
import storage from '../Storage';
import MainPage from './MainPage';
import { withNavigation } from 'react-navigation';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        // this.setPassword = this.setPassword.bind(this)
        // this.setEmail = this.setEmail.bind(this)
        // this.login = this.login.bind(this)
    }

    setPassword(password) {
        this.setState({ 'password': password });
    }

    setEmail(email) {
        this.setState({ 'email': email });
    }

    // login() {

        

    //     // var user = { "email":"instructor@test.com",
    //     // "password":"Test12345!"};

    //     // api.post('/user/login', user).then((res) => {
    //     //     var response = res;
    //     //         storage.save(
    //     //             {
    //     //                 key:'accessToken',
    //     //                 data: res.data
    //     //             }
    //     //         );
    //     // }).catch((err) => {
    //     //     var error = err;
    //     // })
    // }

    render() {
        return (
            <Background>
      <BackButton    onPress={() => this.props.navigation.navigate('Home')}/>
      <Logo />


      <TextInput
        label="Email"
        returnKeyType="next"
        onChangeText={(text) => setEmail({ value: text, error: '' })}
      
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        onChangeText={(text) => setPassword({ value: text, error: '' })}
    
        secureTextEntry
      />


<Button
        mode=""
        backgroundColor="#0000"
        onPress={this.props.navigation.navigate('Main')    }
        style={{ marginTop: 75 }}
      >
        Sign Up
      </Button>
            </Background>

        
        )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "100%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});
export default withNavigation(LoginScreen);
