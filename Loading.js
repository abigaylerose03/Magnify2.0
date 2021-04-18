import React, {Component} from 'react';
import {View, Text, Button, TouchableHighlight, Image, SafeAreaView} from 'react-native';
// import { createStackNavigator, createAppContainer} from 'react-navigation';
// import {Actions} from 'react-native-router-flux';
import styles from './moodstyles';
import VersesScreen from './VersesScreen';
import VerseStuff from './Verse';

// const inspo = ["Cast all your anxiety on Him because He cares for you - 1 Peter 5:7", 
// "For I know the plans I have for you, plans not to harm you but to give you hope and a future  - Jeremiah 29:11", 
// "Even in the darkest valley, I am with you - Psalm 23:4"];

const quotes = ["So do not fear, for I am with you says the Lord!", 
"I promise you that nothing is chaotic as it seems. Nothing is worth diminishing your health for.", "Trust yourself. You've survived a lot, and you'll survive whatever is coming.",
"Reminder: you are stronger than your anxious, scary, and intrusive thoughts! They will pass. They always do.", "You are so BRAVE for enduring these anxious thoughts"];

// save verses to a list
// get the list of saved verses to the versesscreen component 


export default class Loading extends Component {
	constructor(props) {
		super(props);

	}

	// addVerses = () => {
	// 	verses.push(rand);
	// 	alert("Saved successfully!");
	// 	console.log(verses);
	// }	
	
	verseScreen = () => {
		Actions.verses();
	}


	render() {
		const rand = this.props.rand;
		return ( 
	
			<SafeAreaView style={styles.container}>
				<Image
      				style={{position: "relative", top: 6, width: 200, height: 200}}
      				source={require("/Users/abigaylepeterson/MagnifyWellness2/components/img/logo.png")}
        		/>
        		<Text style={styles.text}>You are loved. Click me to load!</Text>
			</SafeAreaView> 

		); 
	}
}