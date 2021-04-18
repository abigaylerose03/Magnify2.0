import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView
} from 'react-native'

// import Actions from 'react-native-router-flux';
import Login from './Login';
import Signup from './Signup';
import Home from './HomeScreen';
import Verses from './VersesScreen';
import Fear from './FearScreen';
import Joy from './JoyScreen';
import Sad from './SadScreen';
import Journal from './Journal';
import PrayerWarrior from './PrayerWarrior';
import MiscScreen from './MiscScreen';
import Maggie from './Maggie'; // the chatbot
import GameScreen from './GameScreen'; // the current game screen
import HelpScreen from './HelpScreen'; // sos 
import UserProfile from './UserProfile'; // user profile
import Entries from './Entries'; // journal entries
import Counseling from './Counseling'; // journal entries
import Resources from './Resources';
import ChangeInfo from './ChangeInfo';
import NavBar from './NavBar';
import SideBar from './SideBar';
import DrawerIcon from './DrawerIcon';
import KindlyNote from './KindlyNote';
import SendKindlyNote from './SendKindlyNote';
import OnboardingScreen from './OnboardingScreen';
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMdF1FTL7Y3-QuccSmly-mjy72dTnJJPM",
  authDomain: "magnify-d9cf7.firebaseapp.com",
  databaseURL: "https://magnify-d9cf7.firebaseio.com",
  projectId: "magnify-d9cf7",
  storageBucket: "magnify-d9cf7.appspot.com",
  messagingSenderId: "930103718286",
  appId: "1:930103718286:web:dd23bc036d8bfc62caf4df",
  measurementId: "G-H6SKD72J8S"
};

const Stack = createStackNavigator();
const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <Loading/>;

  if (!user) {
    return (
      <NavigationContainer>
          <Stack.Navigator
          
            screenOptions={{
            unmountOnBlur: true,
            }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />

          </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
          unmountOnBlur: true,
          }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


firebase.initializeApp(firebaseConfig);
global.db = firebase.firestore();

export default App;