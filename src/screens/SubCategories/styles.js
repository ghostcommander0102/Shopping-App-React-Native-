import { AppStyles } from '../Account/AppStyles';
import { StyleSheet, Dimensions } from 'react-native';
import { ProductCard } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		backgroundColor: AppStyles.color.white,
		height: '100%'
	},
	itemcontainer: {
		borderBottomWidth: 0.3
	},
	categoriesName: {
		marginTop: 20,
		marginLeft: 20,
		marginBottom: 20,
		fontSize: 25
	}
	
});

export default styles;
