import React, {useRef, useEffect, Component} from 'react';
import {View, Text, Button, TouchableHighlight, Image, SafeAreaView, Animated, Linking, ImageBackground} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
// import {Actions} from 'react-native-router-flux';
import styles from './moodstyles';
import VersesScreen from './VersesScreen';
import VerseStuff from './Verse';


import { Container, Header, Content, Footer, 
  FooterTab, Icon, Left, Right, Body, Title, Card, CardItem} from 'native-base';


const inspo = ["You have known to me the path of life; in your presence there is fullness of joy - Psalm 16:11",
"May He grant you your heart's desire and fulfull all your plans! - Psalm 20:4-5", 
"For you have seen my help, and in the shadow of your wings I will sing for joy. My soul clings to youl your right hand upholds me. - Psalm 63:6-7",
];
const quotes = ["Don't worry, be happy!", "When life gives you lemons, make some lemonade", "Happiness is the new rich!", "You are responsible for your own happiness.", "Remember that it's ok to not be ok sometimes",
"Happiness comes from within, don't depend on others for your joy, nor let anyone steal it", "The only person you are destined to become is the person you decide to be", "It's a good day to be proud of how far you've come", "Let your smile change the world, but don't let the world change your smile!", "Live in the present!"];

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
export default class JoyScreen extends Component {
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

				 

				<FadeInView>
					<Text style={styles.feelingText}>Because you are feeling {homeFeeling}, I recommend you write why you're so {homeFeeling} in the journal!</Text> 
				</FadeInView>


				 <View style={{position: 'relative', right: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Card style={styles.card}>
                    <CardItem header button onPress={() => Actions.kindlynote()}>
                      <Text style={styles.cardText}>Send a KindlyNote encourage someone back!</Text>

                    </CardItem>

                  </Card>

                   <Card style={styles.card}>
                    <CardItem header button onPress={() => Actions.journal()}>
                      <Text style={styles.cardText}>Write in the Journal</Text>
                    </CardItem>
                  
                  </Card>
                 </View>

                </ImageBackground>


				
			</SafeAreaView> 

		); 
	}
}