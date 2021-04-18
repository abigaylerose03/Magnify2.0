import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
	container: {
		width: "100%",
		aspectRatio: 10 / 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputBox: {
		width: wp('84%'),
		height: hp('4.5%'),
		backgroundColor: '#f2f2f2',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: wp('3.2%'),
		color: '#002f6c',
		marginVertical: 20,
		fontFamily: 'Avenir-Medium',
	},
	button: {
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
		fontFamily: 'Avenir-Light',
	}
});

export default styles;