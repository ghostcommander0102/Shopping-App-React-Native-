import React from 'react';
import {
	FlatList,
	Text,
	View,
	TouchableHighlight,
	Image
} from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SERVER_URL } from '../../utils/api';
export default class AdsListScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "My ADS"
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			products: [{}]
		}
	}

	componentDidMount() {
		// this.props.navigation.setOptions({title: this.props.category.Title});
		this.props.getAdsProducts({ token: this.props.token, id: 0 });
		this.setState({ products: this.props.products }, () => {
		});
	}

	onPressProduct = item => {
		this.props.getProduct({ token: this.props.token, id: item.ID })
		this.props.navigation.navigate('Product');
	};

	renderProducts = ({ item }) => (
		<TouchableHighlight underlayColor='rgba(73,182,77,0)' onPress={() => this.onPressProduct(item)}>
			<View style={styles.container}>
				<Image style={styles.photo} source={{ uri: SERVER_URL + item.photo_url }} />
				<Text style={styles.title}>{item.Name}</Text>
				<Text style={styles.category}>{item.price}</Text>
				<Text >{item.Location}</Text>
				<Text >{item.Create_At}</Text>
			</View>
		</TouchableHighlight>
	);

	render() {

		return (
			<View>
				<AwesomeAlert
					show={this.props.loading}
					showProgress={true}
					title=""
					message="Loading"
					closeOnTouchOutside={false}
					closeOnHardwareBackPress={false}
					showCancelButton={false}
					showConfirmButton={false}
					cancelText="No, cancel"
					confirmText="OK"
					confirmButtonColor="#DD6B55"
					onCancelPressed={() => {
						// this.props.hideAlert();
					}}
					onConfirmPressed={() => {

					}}
					style={{progressSize:30}}
				/>
				<FlatList
					vertical
					showsVerticalScrollIndicator={false}
					numColumns={2}
					data={this.props.products}
					renderItem={this.renderProducts}
					keyExtractor={item => `${item.recipeId}`}
				/>
			</View>
		);
	}
}
