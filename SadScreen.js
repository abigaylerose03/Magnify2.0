import React, {useRef, useEffect, Component} from 'react';
import {View, Text, Button, TouchableHighlight, Image, SafeAreaView, Linking, Animated, ImageBackground} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
// import {Actions} from 'react-native-router-flux';
import styles from './moodstyles';
import VersesScreen from './VersesScreen';
import VerseStuff from './Verse';


import { Container, Header, Content, Footer, 
  FooterTab, Icon, Left, Right, Body, Title, Card, CardItem} from 'native-base';

const inspo = ["The Lord himself goes before you and will be with you; " + 
"he will never leave you nor forsake you. - Deuteronomoy 31:8",
"Blessed are those who mourn, for they will be comforted - Matthew 5:4",
"All my longings lie open before you, Lord my sighing is not hidden from you. - Psalm 38:9"
];

const quotes = ["And if today all you did was hold yourself together, I'm proud of you.", "The Lord will FIGHT for you. All you need to do is be still!", 
"Be patient with yourself. Self growth is tender!", "The only thing most exhausting than being depressing is pretending that you're not.", "You're like a grey sky. You're beautiful, even though you don't want to be."
,"If you want others to be happy, practice compassion. If you want to be happy, practice compassion.", "Sometimes the people around you won’t understand your journey. They don’t need to, it’s not for them. — Joubert Botha", "You are never alone!", "Even the brightest stars shine in the darkness", "No rain no flowers. You got this!", "There is hope in the darkness", "Out of the mountain of despair, a stone of hope - Martin Luther King Jr.", "It's ok to be a glowstick: Sometimes we have to break before we shine!", "You are capable of amazing things!"];

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

export default class SadScreen extends Component {
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
					<Text style={styles.feelingText}>Because you are feeling {homeFeeling}, I recommend you try the SOS button for breathing exercises or list 10 things you are thankful for in the gratitude journal.</Text> 
				</FadeInView>


				 <View style={{position: 'relative', right: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Card style={styles.card}>
                    <CardItem header button onPress={() => Actions.kindlynote()}>
                      <Text style={styles.cardText}>Check your KindlyNotes</Text>

                    </CardItem>
                    
                  </Card>

                   <Card style={styles.card}>
                    <CardItem header button onPress={() => Actions.maggie()}>
                      <Text style={styles.cardText}>Talk with Maggie the chatbot</Text>
                    </CardItem>
                    
                  </Card>
                 </View>
				</ImageBackground>
				
			</SafeAreaView> 

		); 
	}
}