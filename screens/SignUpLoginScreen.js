import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class SignUpLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  //function userSignUp
  usersSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        alert('User added successfully!')
        return Alert.alert('User added successfully!');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}> Barter App </Text>{' '}
        </View>
        <View>
          '
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter password..."
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 30,alignItems:'center' }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              this.usersSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70dbff',
  },

  title: {
    fontSize: 57,
    fontWeight: '300',
    paddingBottom: 30,
    color: '#36007d',
    fontWeight:'bold'
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#36007d',
    fontSize: 20,
    margin: 20,
    paddingLeft: 10,
  },
  button: {
    width: 320,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#64008f',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
