import React, {Component} from 'react';
import {
  Text,
} from 'react-native';
// import {Router, Stack, Scene, Drawer} from 'react-native-router-flux';


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
import App from './App';
import KindlyNote from './KindlyNote';
import SendKindlyNote from './SendKindlyNote';
import Onboarding from './OnboardingScreen';


// import ContactForm from './ContactForm';

// AWS, Firebase -> secure comminication back and forth to backend and frontend 
// pushing content to the user 
// figure it out before you go too deep
// asynchronous stored key-value database scoped just to the app on the device
// onlhy spanned to one device not multiple devices
// Firebase woudl be able to remember databses globally user authenticiation
// a cache buster 
// more responsibites but more tools
// look at the classes that are offered in the previous year at university
// 	<Scene key="userProfile" component={UserProfile} title="Profile" />
									
// Actions.refresh({key: 'drawer', open: value => !value });
// <Scene key="login" component={Login} title="Login" />
// <Scene key="newUserOne" component={NewUserOne} title="Welcome to Magnify" /> 
// 
// have two routes? one for login and one for home


/*

			<Stack key="root">
					<Drawer
						hideNavBar
                        open={false}
                        key="menu"
                        contentComponent={SideBar}
                        drawerWidth={300}
                        drawerPosition="right"

                    >
                    	<Scene drawer={true} key="home" component={Home}/>

                    </Drawer>
 */
export default class Routes extends Component {
	render() {
		return (
			<Router
				barButtonIconStyle={styles.barButtonIconStyle}
				navigationBarStyle={{backgroundColor: '#33cccc'}}
				titleStyle={{color: 'white', fontFamily: 'AppleSDGothicNeo-Bold'}}
				cardStyle={{backgroundColor: "#ffffff"}}>


					<Stack key="root">
						
						<Drawer
							hideNavBar
	                        open={false}
	                        key="menu"
	                        contentComponent={SideBar}
	                        drawerWidth={300}
	                        drawerPosition="right"

	                    >

	                    	<Scene drawer={true} key="home" component={Home}/>
	                    	<Scene drawer={true} key="journal" component={Journal} title="Journal" />


							<Scene key="game" component={GameScreen} title="Maggie's Big Adventure" />
							<Scene key="kindlynote" component={KindlyNote} title="KindlyNotes Home Page" />
						
							<Scene key="anxiety" component={Fear} /> 
							<Scene key="prayerWarrior" component={PrayerWarrior} title="Support/Prayer Request" />
							
							<Scene key="userProfile" component={UserProfile} title="Profile" />
							<Scene key="changeInfo" component={ChangeInfo} title="Change Personal Info" />
							<Scene key="sendkindlynote" component={SendKindlyNote} title="" />
						
						
							<Scene key="verses" component={Verses} title="Saved Verses and Quotes" />
							<Scene key="sad" component={Sad} />
							<Scene key="joy" component={Joy} />
							<Scene drawer={true} key="journal" component={Journal} title="Journal" />
							<Scene key="entries" component={Entries} title="My Journal Entries" />
							
							<Scene key="misc" component={MiscScreen} title="" />
						
							<Scene key="maggie" component={Maggie} title="Maggie" />
							<Scene key="counseling" component={Counseling} title="Reach Out To a Counselor" />
							<Scene key="sos" component={HelpScreen} title="Help" />
							<Scene key="resources" component={Resources} title="Advice Guides" />


                    </Drawer>

                    	
					
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Sign up" />

       
					


				</Stack>
			</Router>
		);
	}
}
const styles = {
	barButtonIconStyle: {
		tintColor: 'white'
	}
}