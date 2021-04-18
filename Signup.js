import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image, 
	SafeAreaView,
	Linking,
	TextInput,
	ImageBackground

} from 'react-native';

import Form from './Form';
// import {Actions} from 'react-native-router-flux';

import signupstyles from './signupstyles';

import * as firebase from "firebase";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'


export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			yourName: "",
			yourAge: "",
			yourGender: "",
			email: "",
			password: "",
		}
	}

	goBack() {
		Actions.pop()
	}


	saveData = () => {
		const {email, password, yourName, yourAge, yourGender} = this.state;

		// save data with asyncstorage
		let loginDetails = {
			email: email,
			password
		}
		try {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((user) => { 
					Actions.home();
					// db.collection("messages").doc("users")

				});
			} catch(error) {
				errorCode = error.code;
				errorMessage = error.message;

				if(errorCode == 'auth/invalid-password') {
					alert('Passowrd must be at least 6 characters long!');
				} else {
					Actions.home();
				}
			}

		}
	

	render() {
		name = this.state.yourName;
		age = this.state.yourAge;
		gender = this.state.yourGender;
		

		return (
			<SafeAreaView style={signupstyles.container}>
				    <ImageBackground source={require('/Users/abigaylepeterson/MagnifyWellness2/components/img/test3.png')} resizeMode='cover' style={{width: '100%', height: '100%'}}>
					<Text>{'\n'}</Text>
					<Text>{'\n'}</Text>
					
					<TextInput style={signupstyles.inputBox}
						onChangeText={(value) => this.setState({yourName: value})}
						placeholder="Name"
						placeholderTextColor = "#002f6c"
					/>
					<TextInput style={signupstyles.inputBox}
						onChangeText={(value) => this.setState({yourAge: value})}
						placeholder="Age"
						placeholderTextColor = "#002f6c"
					/>
					<TextInput style={signupstyles.inputBox}
						onChangeText={(value) => this.setState({yourGender: value})}
						placeholder="Gender"
						placeholderTextColor = "#002f6c"
					/>
					<TextInput style={signupstyles.inputBox}
						onChangeText={(value) => this.setState({email: value})}
						placeholder="Email"
						placeholderTextColor = "#002f6c"
					/>
					<TextInput style={signupstyles.inputBox}
						onChangeText={(value) => this.setState({password: value})}
						placeholder="Password"
						secureTextEntry={true}
						placeholderTextColor = "#002f6c"
					/>
					
				
					<TouchableOpacity style={signupstyles.button}>
							<Text style={signupstyles.buttonText} onPress={this.saveData}>Sign Up</Text>
					</TouchableOpacity>

					<Image source={require('/Users/abigaylepeterson/MagnifyWellness2/components/img/magnifyyou2.png')} resizeMode='stretch' style={{justifyContent: 'center', flex: 1, alignItems: 'center', marginLeft: 150, width: 100, height: 90}}></Image>
					
		

					<SafeAreaView style={signupstyles.signupTextCont}>
						<Text style={signupstyles.text}>By signing up, you agree to our</Text>
						<TouchableOpacity onPress={()=> {Linking.openURL('https://docs.google.com/document/d/1wN92WtHPSbPD576VPCRvLBB3y0I2F8xsqU8c2G64g8g/edit?usp=sharing')}}><Text style={signupstyles.tc}>Terms & Privacy Policy</Text></TouchableOpacity>
					</SafeAreaView>

			
					<SafeAreaView style={signupstyles.signupTextCont}>
						<Text style={signupstyles.signupText}>Already have an account?</Text>
						<TouchableOpacity onPress={this.goBack}><Text style={signupstyles.signupButton}> Sign in</Text></TouchableOpacity>
					</SafeAreaView>
				</ImageBackground>
			</SafeAreaView>
		)
	}
}