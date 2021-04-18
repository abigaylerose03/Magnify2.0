import React, {Component} from 'react'

import {StylesSheet, Text, View, TextInput, 
		TouchableOpacity, AsyncStorage, Keyboard, Image, SafeAreaView, ImageBackground} from 'react-native';

// import {Actions} from 'react-native-router-flux';

import styles from './loginstyles';

import Form from './Form'

import Routes from './Routes';
import RoutesHome from './RoutesHome';
import * as firebase from "firebase";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'


export default class Login extends Component {
	signup() {
		Actions.signup()

	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
			    <ImageBackground source={require('/Users/abigaylepeterson/MagnifyWellness2/components/img/test3.png')} resizeMode='cover' style={{width: '100%', height: '100%'}}>
				
					<Text>{'\n'}</Text>
					<Text>{'\n'}</Text>
					<Text style={styles.title}>Magnify</Text>
					 <Image
	      				style={{position: "relative", top: 3, left: 145, width: wp('20%'), height: hp('20%')}}
	      				source={require("/Users/abigaylepeterson/MagnifyWellness2/components/img/logo.png")}
	        		/>
					<Form type="Login" />
						<SafeAreaView style={styles.signupTextCont}>
							<Text style={styles.signupText}>Don't have an account yet? </Text>  
							<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Sign Up</Text>
							</TouchableOpacity>
						</SafeAreaView>
				</ImageBackground>
			</SafeAreaView>


		);
	}
}