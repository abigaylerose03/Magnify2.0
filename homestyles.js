import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

const homestyles = StyleSheet.create({
	container: {
		width: "100%",
	},
	headText: {
		position: "relative",
		top: 30,
		fontFamily: 'AppleSDGothicNeo-Bold',
		fontSize: wp('5%'),
		textAlign: "center"
	},
	subText: {
		position: "relative",
		top: 290,
		fontFamily: "AppleSDGothicNeo-Light",
		fontSize: wp('4.5%'),
		color: "grey",
		textAlign: "center",
	},
	subTextNew: {
		position: "relative",
		fontFamily: "AppleSDGothicNeo-Light",
		fontSize: wp('4.5%'),
		color: "grey",
		textAlign: "center",
	},
	input: {
		position: 'relative',
		top: 90,
		left: 10,
		width: 250,
		height: 50,
		backgroundColor: '#f2f2f2',
		borderRadius: 25,
		paddingHorizontal: 16,
		textAlign: 'center',
	    position: 'relative',
	   	// top: 340,
		justifyContent: 'center',
		alignItems: 'center',
		height: hp('4.5%'),
	},
	moodcheckin: {
		position: 'relative',
		top: 100,
		flexDirection: 'row',
		flexWrap: "wrap",

	},

	feelingsBtn: {
		position: 'relative',
		top: 20,
		left: 29,
		position: "relative",
		width: 100,
		height: 30,
		backgroundColor: '#33cccc',
		borderRadius: 25,
	},

	btnUser: {
		width: wp('2%'),
		height: hp('2%'),
		position: "relative",
		left: 350,
		bottom: 35,
	},
	quoteBtn: {
		position: "relative",
		top: 33,
		left: 100,
		width: wp('50%'),
		height: hp('10%'),
	},


	btnQuoteText: {
		borderWidth: 2,
		borderRadius: 25,
		fontSize: wp('5.5%'),
		borderColor: "#33cccc",
		backgroundColor: 'white',
		color: 'black',
		textAlign: "center",
		fontFamily: 'AppleSDGothicNeo-Bold',
		marginTop: 8,

	},

	feelingsbtnText: {
		fontSize: wp('10.5%'),
		color: "white",
		fontSize: 12,
		textAlign: "center",
		fontFamily: 'AppleSDGothicNeo-Bold',
		marginTop: 8,

	},
	footer: {
		marginTop: 2,
		width: wp('5%'),
		height: hp('5%'),
		padding: 1,
	},
	icon: {
		position: 'relative',
		left: 10,
		top: 9,
		width: wp('10%'),
	},
	iconText: {
		fontSize: wp('2.5%'),
		top: 10,
		color: 'black',
		textAlign: 'center',
		fontFamily: 'AppleSDGothicNeo-Bold',
	},
	card: {
		backgroundColor: '#f5f5f5',
		borderWidth: 1,
		borderColor: 'black',
		flexDirection: 'row',
		marginTop: 10,
		flexWrap: "wrap",
		justifyContent: 'space-between',
		width: 100,
		height: 100,
		shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.5,
    	shadowRadius: 1,  
    	borderRadius: 10,

	},
	card1: {
		backgroundColor: '#f5f5f5',
		position: 'relative',
		right: 60,
		borderWidth: 1.5,
		borderColor: 'black',
		flexDirection: 'row',
		marginTop: 10,
		flexWrap: "wrap",
		justifyContent: 'space-between',
		width: 100,
		height: 100,
		shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.5,
    	shadowRadius: 1,
    	borderRadius: 10,  

	},
	cardBig: {
		backgroundColor: '#f5f5f5',
		borderWidth: 1.5,
		borderColor: 'black',
		width: 130,
		height: 95,
		shadowColor: '#000',
    	shadowOffset: { width: 0, height: 1 },
    	shadowOpacity: 0.5,
    	shadowRadius: 1,  
	},
	cardText: {

		fontSize: wp('3%'),
		fontWeight: 'bold',
		textAlign: 'center',
		position: 'relative',
		right: 10,
		// left: 15,
		fontFamily: "AppleSDGothicNeo-Light",
	
		
		
	},
	text: {
		position: 'relative',
		top: 60,
		color: '#ffcc00',
		textAlign: 'center',
		fontSize: wp('6%'),
		fontFamily: 'AppleSDGothicNeo-Bold',

	},
	rowText: {
		position: 'relative',
		fontSize: wp('6.5%'),
		fontFamily: 'AppleSDGothicNeo-Bold',
		textShadowColor: 'rgb(128,128,128)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 9,

	},
	cardIcon: {
		position: 'relative',
		marginTop: 5,
		top: 10,
		alignItems: 'center',
		marginLeft: 35,
		left: 5,
		width: wp('6.5%'),
		height: hp('5%'),
  		justifyContent: 'flex-start'
	},
});

export default homestyles;