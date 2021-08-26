import { AppStyles } from '../Account/AppStyles';
import { StyleSheet, Dimensions } from 'react-native';
import { ProductCard } from '../../AppStyles';
// screen sizing
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 460,
		backgroundColor: AppStyles.color.white
	},
	title: {
		marginTop: 5,
		fontSize: 15,
		marginLeft: 10
	},
	price: {
		marginTop: 5,
		fontSize: 18,
		marginLeft: 10
	},
	firstcontainer: {
		marginTop: 20
	},	
	itemcontainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginTop: 10,
		width: 130,
		height: 120,
	},
	photo: {
		width: 90,
		height: 120,
	},
	maintitle: {
		marginTop: 10,
		marginLeft: 20,
		fontSize: 20
	},	
	categoryContainer: {
		backgroundColor: AppStyles.color.white,
		marginTop: 25
	},
	subcategoriesItemContainer: {
		flex: 1,
		marginRight: 15,
		alignItems: 'center',
		flexDirection: 'row',
    	justifyContent: 'space-between',
		height: 60,
		backgroundColor: 'white',
		borderBottomColor: 'grey',
		borderBottomWidth: 0.5
	},
	productItemContainer: ProductCard.recentProductContainer,
	categoriesPhoto: {
		width: 80,
		height: 80
	},
	categoriesName: {
		flex: 1,
		fontSize: 18,
		color: '#333333',
		textAlign:'center',
	},
	subcategoriesName: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
	},
	categoriesInfo: {
		marginTop: 3,
		marginBottom: 5
	}
});

export default styles;
