import { StyleSheet, Dimensions } from 'react-native';
import { AppStyles } from './screens/Account/AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const PRODUCT_ITEM_HEIGHT = 150;
const PRODUCT_ITEM_MARGIN = 20;

// 2 photos per width
export const ProductCard = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: PRODUCT_ITEM_MARGIN,
		marginTop: 20,
		width: (SCREEN_WIDTH - (recipeNumColums + 1) * PRODUCT_ITEM_MARGIN) / recipeNumColums,
		height: PRODUCT_ITEM_HEIGHT + 120,
		borderColor: '#cccccc',
		borderWidth: 0.5,
		borderRadius: 15
	},
	recentProductContainer: {
		flex: 1,
		marginLeft: 10,
		marginTop: 10,
		width: (SCREEN_WIDTH - (recipeNumColums + 1) * 10) / recipeNumColums,
		height: PRODUCT_ITEM_HEIGHT + 100,
		borderColor: '#dddddd',
		borderWidth: 2.5,
		borderRadius: 5
	},
	photo: {
		width: (SCREEN_WIDTH - (recipeNumColums + 1) * PRODUCT_ITEM_MARGIN) / recipeNumColums,
		height: PRODUCT_ITEM_HEIGHT,
		borderRadius: 15,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	},
	title: {
		flex: 1,
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#444444',
		marginTop: 3,
		marginRight: 5,
		marginLeft: 5,
	},
	category: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		color: AppStyles.color.tint
	}
});