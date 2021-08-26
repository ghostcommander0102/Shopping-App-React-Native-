import { AppStyles } from '../Account/AppStyles';
import { StyleSheet, Dimensions } from 'react-native';
import { ProductCard } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		backgroundColor: AppStyles.color.white,
		padding: 20
	},
	itemcontainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: width / 2 - 20,
		height: 140,
		borderBottomWidth: 0.5
	},
	itemRightBorder: {
		borderRightWidth: 0.5
	},

	categoriesName: {
		fontSize: 25
	},
	categoriesPhoto: {
		width: 70,
		height: 70
	}
});

export default styles;
