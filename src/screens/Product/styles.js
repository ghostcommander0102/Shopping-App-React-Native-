import { StyleSheet, Dimensions } from 'react-native';
import { AppStyles } from '../Account/AppStyles';
const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	carouselContainer: {
		minHeight: 250
	},
	carousel: {},

	image: {
		...StyleSheet.absoluteFillObject,
		width: '100%',
		height: 250
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		width: viewportWidth,
		height: 250
	},
	paginationContainer: {
		flex: 1,
		position: 'absolute',
		alignSelf: 'center',
		paddingVertical: 8,
		marginTop: 200
	},
	paginationDot: {
		width: 15,
		height: 15,
		borderRadius: 10,
		marginHorizontal: 0
	},
	infoRecipeContainer: {
		flex: 1,
		margin: 25,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	infoPhoto: {
		height: 30,
		width: 30,
		marginRight: 0
	},
	infoPhoto1: {
		height: 23,
		width: 23,
		marginRight: 0
	},
	infoRecipe: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 5,
	},
	category: {
		fontSize: 14,
		fontWeight: 'bold',
		margin: 10,
		color: '#2cd18a'
	},
	infoDescriptionRecipe: {
		textAlign: 'left',
		fontSize: 16,
		marginTop: 30,
		margin: 15
	},
	infoRecipeName: {
		fontSize: 28,
		margin: 10,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center'
	},
	infoCost: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'red',
		textAlign: 'center',
	},
	bottom: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttonContainer: {
		flex: 1,
		margin: 10,
		width: "45%",
		height: 45,
		borderRadius: AppStyles.borderRadius.main,
	},
	buttonStyle: {
		width: "100%",
		borderRadius: AppStyles.borderRadius.main,
	},
	map: {
		height: 200,
		width: 400,
	},
});

export default styles;
