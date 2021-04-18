import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

const signupstyles = new StyleSheet.create({

	container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    title: {
      fontSize: wp('12.0%'),
      fontFamily: "Avenir-Medium",
      color: "#ffcc00",
    },
    text: {
      position: 'relative',
      // bottom: 30,
      top: 10,
      left: 80,
      fontSize: wp('4%'),
      fontFamily: "Avenir-Light",
      color: 'grey',

    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 20,
      flexDirection: 'row'
    },
    signupText: {
      color: '#12799f', 
      fontSize: wp('5.0%'),
      fontFamily: "Avenir-Light",
    },
    signupButton: {
      marginTop: 10,
      color: 'white',
      fontSize: wp('5.0%'),
      fontWeight: '500',
      fontFamily: 'Avenir-Light',
    },
    tc: {
      position: 'relative',
      right: 90,
      top: 28,
      fontFamily: "Avenir-Medium",
      color: 'grey',
      fontSize: wp('4%')

    },
    inputBox: {
        marginLeft: 30,
        marginBottom: 35,
        width: wp('84%'),
        height: hp('4.5%'),
        backgroundColor: '#f2f2f2',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: wp('3.2%'),
        color: '#002f6c',
        fontFamily: 'Avenir-Medium',
      },
    button: {
      marginLeft: 30,
      width: wp('60%'),
      backgroundColor: '#33cccc',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12
  },
  buttonText: {
    fontSize: wp('3.4%'),
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  }
});

export default signupstyles;