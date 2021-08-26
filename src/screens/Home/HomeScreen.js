import React from 'react';
import {
	FlatList,
	Text,
	View,
	Image,
	TouchableHighlight,

} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import MenuImage from '../../components/MenuImage/MenuImage';
import { SERVER_URL } from '../../utils/api';
import Dialog, {
	DialogTitle,
	DialogContent,
	DialogFooter,
	DialogButton,
	SlideAnimation,
} from 'react-native-popup-dialog';
export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTransparent: 'true',
		}
	};


	constructor(props) {
		super(props);
		this.state = {
			categories: [{}],
			subCategoryModalVisible: false,
			subCateogory: {}
		}
	}

	componentDidMount() {
		this.props.getCategories(this.props.token);
		this.props.getRecentProducts({ token: this.props.token });
		this.setState({ categories: this.props.categories }, () => {
		});
	}

	onPressCategory = (item) => {
		// this.setState({ subCateogory: item.children});
		this.props.setSubCategory({ category: item });
		this.props.navigation.navigate('SubCategory');
		// if (!haschild) {
		// 	const title = item.Title;
		// 	const category = item;
		// 	this.props.setCategory({ category });
		// 	this.props.navigation.navigate('ProductList');
		// }
	};

	onPressSubCategory = (item) => {
		this.setState({ subCategoryModalVisible: false });
		const title = item.Title;
		const category = item;
		this.props.setCategory({ category });
		this.props.navigation.navigate('ProductList');
	};

	renderCategory = ({ item, index }) => (
		<TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressCategory(item)}>
			<View style={styles.itemcontainer}>
				<Image style={styles.categoriesPhoto} source={require('../../../assets/img/logo1.png')} />
				<Text style={styles.categoriesName}>{item.Title}</Text>
				{/* <Image style={{ width: 30, height: 30, marginRight: 20 }} source={require('../../../assets/icons/right.png')} /> */}
				{/* <Text style={styles.categoriesInfo}>{getNumberOfSubCategories(item.ID)} recipes</Text> */}
			</View>
		</TouchableHighlight>
	);

	renderSubCategory = ({ item, index }) => (
		<TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressSubCategory(item)}>
			<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
				{/* <Image style={styles.categoriesPhoto} source={item.photo_url} /> */}
				<View >
					<Icon name="shopping-bag" size={30} color="green" style={{ marginRight: 10 }} />

				</View>
				<View style={styles.subcategoriesItemContainer}>
					<Text style={styles.subcategoriesName}>{item.Title}</Text>
					<Icon name="chevron-right" size={30} color="grey" />
				</View>
				{/* <Image style={{ width: 30, height: 30, marginRight: 20 }} source={require('../../../assets/icons/right.png')} /> */}
				{/* <Text style={styles.categoriesInfo}>{getNumberOfSubCategories(item.ID)} recipes</Text> */}
			</View>
		</TouchableHighlight>
	);


	onPressProduct = item => {
		for (var i = 0; i < this.props.categories.length; i++) {
			for (var j = 0; j < this.props.categories[i].children.length; j++) {
				if (item.subcategoryId == this.props.categories[i].children[j].id) {
					console.log("sub_category");
					console.log(this.props.categories[i].children[j]);
					this.props.setCategory({ category: this.props.categories[i].children[j] });
					break;
				}
			}
		}

		this.props.getProduct({ token: this.props.token, id: item.ID })
		this.props.navigation.navigate('Product');
	};

	renderRecipes = ({ item }) => (
		<TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressProduct(item)}>
			<View style={styles.productItemContainer}>
				<View style={{ alignItems: 'center', marginTop: 10 }}>
					<Image style={styles.photo} source={{ uri: SERVER_URL + item.photo_url }} />
				</View>
				<Text style={styles.price}>{item.price}</Text>
				<Text style={styles.title}>{item.Name}</Text>
				<Text style={styles.title}>{item.Name}</Text>
				<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
					<Image style={{ width: 20, height: 20 }} source={require('../../../assets/icons/ping.png')} />
					<Text style={{ fontSize: 15, color: '#999999' }}>{item.Location}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);

	render() {
		return (
			<View  >
				<View style={styles.categoryContainer}>
					<Text style={styles.maintitle}>Browse Categories</Text>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={this.props.categories}
						renderItem={this.renderCategory}
						keyExtractor={item => `${item.id}`}
					/>
				</View>
				<View style={styles.container}>
					<Text style={styles.maintitle}>Recent Products</Text>
					<FlatList
						vertical
						showsVerticalScrollIndicator={false}
						data={this.props.recent_products}
						numColumns={2}
						renderItem={this.renderRecipes}
						keyExtractor={item => `${item.recipeId}`}
					/>
				</View>


				<Dialog
					width={0.9}
					onDismiss={() => {
						this.setState({ subCategoryModalVisible: false });
					}}
					onTouchOutside={() => {
						this.setState({ subCategoryModalVisible: false });
					}}
					visible={this.state.subCategoryModalVisible}
					dialogTitle={
						<DialogTitle
							title="Select SubCategory"
							hasTitleBar={false}
						/>
					}
					dialogAnimation={
						new SlideAnimation({ slideFrom: 'bottom' })
					}>
					<DialogContent>
						<View style={{ maxHeight: 500 }}>
							<FlatList
								vertical
								showsVerticalScrollIndicator={false}
								numColumns={1}
								data={this.state.subCateogory}
								renderItem={this.renderSubCategory}
								keyExtractor={item => `${item.id}`}
							/>
						</View>
					</DialogContent>
					<DialogFooter>
						<DialogButton
							text="Close"
							onPress={() => {
								this.setState({ subCategoryModalVisible: false });
							}}
							key="button-1"
						/>
					</DialogFooter>
				</Dialog>

			</View>
		);
	}
}
