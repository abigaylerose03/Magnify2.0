import React, {Component} from 'react'

import {StylesSheet, Text, View, ScrollView, TextInput, Dimensions, Image,
    TouchableHighlight, AsyncStorage, Keyboard, TouchableWithoutFeedback, Linking, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';

import { Container, Header, Content, Footer, 
  FooterTab, Button, Icon, Left, Right, Body, Title, Card, CardItem} from 'native-base';

import GoToButton from './GoToButton';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

/* CREDITS
//<div>Icons made by <a href="https://creativemarket.com/Becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// because you're feeling xyz, go to (Actions.route) */
// <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


          //     {this.state.isShow ? <TouchableOpacity onPress={this.newUser}>
          //           <SafeAreaView>
          //               <Text style={styles.subTextNew}>New Users, click me!</Text>
          //           </SafeAreaView>
          // </TouchableOpacity> : null}
// import {Actions} from 'react-native-router-flux';
import Routes from './Routes';
import RoutesHome from './RoutesHome'

import styles from './homestyles';
import './Verse';

import Form from './Form'
import * as firebase from "firebase";


import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

const { height, width } = Dimensions.get('window');

const quotes = ["It's okay not to be okay as long as you are not giving up!", "Money doesn't always buy happiness", "Surround yourself with people who uplift you who motivate and inspire you to be the better version of yourself.",
"Be thankful for what you have and you will end up having more than you thought!", "The best way to predict the future is to create it!", "Being productive does not mean you are lazy! Take breaks!", "Sometimes in tragedy, you will find your life's purpose.", "They say time changes things, but you actually have to change them yourself. - Andy Warhol", "Love what you have before life teaches you to love what you lost.", "Give yourself permission to be hopeful for what's next because that's something to reach for.", "You owe it to yourself to become everything you've ever dreamed of being", "Searing for that one person to change your life? Look in the mirror!", "Change your thoughts and you change your world - Norman Vincent Peale", "You don't need anyone else's approval.", "The world needs more amazing people like you", "Love yourself, or nobody will!", "Act as if what you do makes a difference, IT DOES. - William James", "Always do your best.", "You never know when a moment becomes a memory.", "When you start seeing your worth, you'll find it harder to stay around people who don't", "Don't count the days, make the days count - Muhammad Ali", "One day, these 5ams will make you a legend.", "Autumn exists to remind us that things must end to begin again", "You don't need anyone else's approval, go for it!"];

export default class HomeScreen extends Component {
   constructor(props) {
    super(props);
      console.disableYellowBox = true;
      
  }

    state = {
      feeling: '',
      isShow: true,
      screenHeight: 0,
    }


    onContentSizeChange = (contentWidth, contentHeight) => {
      this.setState({screenHeight: contentHeight});
    };


  changeMood = () => {
    if(this.state.feeling == "anxious" 
      || this.state.feeling == "fearful" || 
      this.state.feeling == "scared" || this.state.feeling == "stressed") {
        Actions.anxiety(); 
        this.setState({isShow: false})

    } else if (this.state.feeling == "happy" || this.state.feeling == "good" || this.state.feeling == "content" || this.state.feeling == "joyful") {
        Actions.joy();
        this.setState({isShow: false})

    } else if (this.state.feeling == "sad" || this.state.feeling == "grumpy" 
      || this.state.feeling == "annoyed" || this.state.feeling == "bad" || this.state.feeling == "overwhelmed") {
         Actions.sad();
        this.setState({isShow: false})
    } else if(this.state.feeling == "") {
      alert("Please enter your mood!");
    } else {
      Actions.misc();
      this.setState({isShow: false})
    }
  }

  savedVerses = () => {
    Actions.verses();
  }

  journal = () => {
    Actions.journal();
  }

  prayerWarrior = () => {
    Actions.prayerWarrior();
  }

  counseling = () => {
   // Actions.counseling();
    Actions.counseling();
  }

  resources = () => {
    Actions.resources();
  }

  maggie = () => {
    Actions.maggie();
  }

  game = () => {
    Actions.game();
  }

  user = () => {
    Actions.userProfile();
  }

  help = () => {
    Actions.sos();
  }

  newUser = () => {
   //  this.setState({isShow: false});
    Actions.newUserOne();
    this.setState({isShow: false})

  }

  saveQuote = (word) => {
    verses.push(word);
    alert("Saved quote successfully!");
  }

  render() {
    homeFeeling = this.state.feeling;
    // show = this.state.isShow;
    console.log(this.state.isShow);

   
    const scrollEnabled = this.state.screenHeight > height;


    let rand = quotes[Math.floor(Math.random() * quotes.length)];
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView 
          contentContainerStyle style={{flex:1}}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}>

      


      <ImageBackground source={require('/Users/abigaylepeterson/MagnifyWellness2/components/img/home.png')} resizeMode='cover' style={{width: '100%', height: 1000}}>


            <Text style={styles.headText}>{rand}</Text>
            <TouchableHighlight style={styles.quoteBtn} onPress={() => this.saveQuote(rand)}>
              <View>
                <Text style={styles.btnQuoteText}>Save Quote</Text>
              </View>
            </TouchableHighlight>

            <Text style={styles.text}>How are you feeling at the moment?</Text>
          
            <View style={styles.moodcheckin}>
              <TextInput style={styles.input}
                  onChangeText={(value) => this.setState({feeling:value})}
                  placeholder="I am feeling..."
                  autoCapitalize="none"
                  placeholderTextColor = "grey"/>
              <TouchableHighlight style={styles.feelingsBtn} onPress={this.changeMood}>
                <View>
                  <Text style={styles.feelingsbtnText}>Enter</Text>
                </View>
              </TouchableHighlight>
            </View>


            
            <SafeAreaView style={{position: 'relative', top: 150}}>
              <View>
                <Text style={styles.rowText}>Practice Mindfulness</Text>

                <View style={{position: 'relative', right: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Card style={styles.card}>
                    <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.sos()}>
                       <Text style={styles.cardText}>Breathing Exercises</Text>
                    </CardItem>
                    
                    <Icon style={styles.cardIcon} name="refresh-outline" ios="ios-refresh" android="md-refresh" />

                  </Card>

                   <Card style={styles.card}>
                    <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.journal()}>
                      <Text style={styles.cardText}>Journal</Text>
                    </CardItem>
                     <Icon style={styles.cardIcon} name="journal" ios="ios-journal" android="md-journal" />
                  </Card>
                  
                  <Card style={styles.card}>
                    <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.resources()}>
                      <Text style={styles.cardText}>Advice Guides</Text>
                    </CardItem>
                     <Icon style={styles.cardIcon} name="folder" ios="ios-folder" android="md-folder" />
                  </Card>
                </View>
              </View>


              <Text style={styles.rowText}>Find Your Community</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <Card style={styles.card}>
                  <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.maggie()}>
                    <Text style={styles.cardText}>Maggie the Chatbot</Text>
                  </CardItem>
                   <Icon style={styles.cardIcon} name="chatbubbles" ios="ios-chatbubbles" android="md-chatbubbles" />
                </Card>

                 <Card style={styles.card}>
                  <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.counseling()}>
                    <Text style={styles.cardText}>Counselor</Text>
                  </CardItem>
                   <Icon style={styles.cardIcon} name="people" ios="ios-people" android="md-people" />
                </Card>

                 <Card style={styles.card}>
                  <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.prayerWarrior()}>
                    <Text style={styles.cardText}>Prayer and Support</Text>
                  </CardItem>
                   <Icon style={styles.cardIcon} name="heart" ios="ios-heart" android="md-heart" />
                </Card>
                </View>

              <Text style={styles.rowText}>Connect With Your Loved Ones</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Card style={styles.cardBig}>
                  <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.kindlynote()}>
                    <Text style={styles.cardText}>Send and Receive Encouragement</Text>
                  </CardItem>
                    <Icon style={styles.cardIcon} name="mail" ios="ios-mail" android="md-mail" />
                </Card>
            
                  <Card style={styles.cardBig}>
                  <CardItem header button style={{backgroundColor: '#f5f5f5'}} onPress={() => Actions.game()}>
                    <Text style={styles.cardText}>Play Maggie's Adventure Game!</Text>
                  </CardItem>
                   <Icon style={styles.cardIcon} name="rocket" ios="ios-rocket" android="md-rocket" />
                </Card>
              </View>
            </SafeAreaView>

            


        
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
      
    );
  }
}
