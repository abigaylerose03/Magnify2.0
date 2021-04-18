import React, {Component} from 'react';
import {StylesSheet, Text, View, TextInput, 
		TouchableOpacity, AsyncStorage, Keyboard, SafeAreaView} from 'react-native';

// import {Actions} from 'react-native-router-flux';
import styles from './formstyles';
import VerseStuff from './Verse'

import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

import * as firebase from "firebase";

export default class Form extends Component {
	constructor(props) {
		super(props);
		//this.show = this.show.bind(this);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}



	saveData = async() => {
		const {email, password} = this.state;

		// save data with asyncstorage
		let loginDetails = {
			email: email,
			password
		}

		if(this.props.type !== 'Login') {
			try {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(user => { 
					
						Actions.menu();
					});

			} catch(error) {
				errorCode = error.code;
				errorMessage = error.message;

				if(errorCode == 'auth/invalid-password') {
					alert('Password must be at least 6 characters long!');
				} else {
					Actions.newUserOne();
				}
			}

		} else if(this.props.type == 'Login') {
			try {
				firebase
					.auth()
					// .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
					.signInWithEmailAndPassword(email, password)
					.then(function(user) {
						
				


						if (user) {
							Actions.home();
							global.currUser = firebase.auth().currentUser;
						
						} else {
							console.log("not a user");
						}
					});
													// this.btnToChat();
			
			} catch (error) {
				errorCode = error.code;
				errorMessage = error.message;

				if(errorCode == 'auth/wrong-password') {
					alert('You entered the wrong password!');
				} else {
					Actions.menu();
					// this.btnToChat();
				}
			}
		}
	}
	

	

	render() {
		return (
				<SafeAreaView style={styles.container}>
					<TextInput style={styles.inputBox}
								onChangeText={(email) => this.setState({email})}
								placeholder="Email"
								placeholderTextColor = "#002f6c"
								selectionColor="fff"
								onSubmitEdiitng={() => this.password.focus()} />

					<TextInput style={styles.inputBox}
								onChangeText={(password) => this.setState({password})}
								placeholder="Password"
								autoCapitalize="none"
								secureTextEntry={true}
								placeholderTextColor = "#002f6c"
								ref={(input) => this.password = input}/>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
					</TouchableOpacity>
			</SafeAreaView>
		)
	}

}