import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image, 
	SafeAreaView,
	Linking,
	TextInput

} from 'react-native';

import Form from './Form';
// import {Actions} from 'react-native-router-flux';
// import Routes from './Routes';
// import RoutesHome from './RoutesHome'
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
			
		Actions.userProfile();
	}
	

	render() {
		name = this.state.yourName;
		age = this.state.yourAge;
		gender = this.state.yourGender;
		

		return (
			<SafeAreaView style={signupstyles.container}>
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

			
				<TouchableOpacity style={signupstyles.button} onPress={this.saveData}>
						<Text style={signupstyles.buttonText}>Update Profile</Text>
				</TouchableOpacity>
				
			</SafeAreaView>
		)
	}
}