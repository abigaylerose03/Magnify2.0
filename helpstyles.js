import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
      
	},
	circle: {
		 position: 'relative',
		 left: 155,
		 top: 120,
		justifyContent: 'center',
	     width : wp('3.7%'),
	     height: hp('2%'),
	     backgroundColor : '#0091EA',
	     borderRadius: 100,

	 },
	 btn: {
	 	position: 'relative',
	 	top: 300,
	 	left: 60,
	  	width: wp('50.0%'),
		backgroundColor: '#33cccc',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 12,
		justifyContent: 'center',
        alignItems: 'center',
	  },

	  btnText: {
		  fontSize: hp('1.9%'),
	      fontFamily: "Avenir-Light",
	      color: 'white',
	      textAlign: 'center',
	  },
	  text: {
	  	position: 'relative',
	  	top: 320,
	  	fontFamily: "Avenir-Medium",
	  	fontSize: hp('1.9%'),
	  	color: 'grey',

	  },
	  hotlinesText: {
	  	position: 'relative',
	  	top: 320,
	  	fontFamily: "Avenir-Medium",
	  	fontSize: hp('1.6%'),

	  }
	
});


export default styles;