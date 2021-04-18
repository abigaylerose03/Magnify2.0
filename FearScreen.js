import React, {useRef, useEffect, Component} from 'react';
import {View, Text, Button, TouchableHighlight, Image, SafeAreaView, Linking, Animated} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
// import {Actions} from 'react-native-router-flux';
import styles from './moodstyles';
import VersesScreen from './VersesScreen';
import VerseStuff from './Verse';

const inspo = ["Cast all your anxiety on Him because He cares for you - 1 Peter 5:7", 
"For I know the plans I have for you, plans not to harm you but to give you hope and a future  - Jeremiah 29:11", 
"Even in the darkest valley, I am with you - Psalm 23:4"];

const quotes = ["So do not fear, for I am with you says the Lord!", 
"I promise you that nothing is chaotic as it seems. Nothing is worth diminishing your health for.", "Trust yourself. You've survived a lot, and you'll survive whatever is coming.",
"Reminder: you are stronger than your anxious, scary, and intrusive thoughts! They will pass. They always do.", "Say it with me: I deserve it.", "I grow stronger each time I overcome anxiety.", "Their perception of you is not who you are."];

const FadeInView = (props) => {
		const fadeAnim = useRef(new Animated.Value(0)).current 
		// initial value for opacity is 0
		React.useEffect(() => {
			Animated.timing(
				fadeAnim,
					{

						toValue: 1,
						duration: 4000,
					}
				).start();

		}, [])

		return (
			<Animated.View
				style={{
				  ...props.style,
				  opacity: fadeAnim,
				}}
			>
			{props.children}
			</Animated.View>
		);
};


export default class FearScreen extends Component {
	constructor(props) {
		super(props);

	}

	addVerses = (word) => {
		verses.push(word);
		alert("Saved quote successfully!");
	}

	verseScreen() {
		Actions.verses();
	}



	render() {
		let rand = quotes[Math.floor(Math.random() * quotes.length)];
		return ( 
			<SafeAreaView style={styles.container}>
			 <ImageBackground source={require('/Users/abigaylepeterson/MagnifyWellness2/components/img/home.png')} resizeMode='cover' style={{width: '100%'}}>
			 <TouchableHighlight style={styles.databaseLink} onPress={()=> {Linking.openURL('https://docs.google.com/spreadsheets/d/1YWNl6zIVRmJbyA5Ay2nbRpDsA-MJo291-IS3zAu7kvU/edit?usp=sharing')}}>
			 	<SafeAreaView>
			 		<Text style={styles.topText}>Check out the Support Groups Tab of the Mental Health Database!</Text>
			 
				</SafeAreaView>
			</TouchableHighlight>




				<Text style={styles.text}>{rand}</Text> 

				<FadeInView>
					<Text style={styles.feelingText}>Because you are feeling {homeFeeling}, I recommend you try the SOS button for breathing exercises or make a to-do list under user-profiles.</Text> 
				</FadeInView>
				<TouchableHighlight style={styles.button} onPress={() => this.addVerses(rand)}>
						<SafeAreaView>
								<Text style={styles.buttonText}>Save Quote</Text>
						</SafeAreaView>
				</TouchableHighlight>
			
				<TouchableHighlight style={styles.button} onPress={this.verseScreen}>
					<SafeAreaView>
						<Text style={styles.buttonText}>See Saved Quotes</Text>
					</SafeAreaView>
				</TouchableHighlight>
				</ImageBackground>
				
			</SafeAreaView> 

		); 
	}
}