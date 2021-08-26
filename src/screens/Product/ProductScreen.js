import React from 'react';
import {
	ScrollView,
	Text,
	View,
	Image,
	Dimensions,
	TouchableHighlight
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import Dialog, {
	DialogTitle,
	DialogContent,
	DialogFooter,
	DialogButton,
} from 'react-native-popup-dialog';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SERVER_URL } from '../../utils/api';
import BackButton from '../../components/BackButton/BackButton';
import MapView, {Circle} from 'react-native-maps';

const { width: viewportWidth } = Dimensions.get('window');
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const SPACE = 0.01;

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SAMPLE_REGION = {
	latitude: LATITUDE,
	longitude: LONGITUDE,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
};
const circle = {
	center: {
		latitude: LATITUDE + SPACE,
		longitude: LONGITUDE + SPACE,
	},
	radius: 700,
};
export default class ProductScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTransparent: 'true',
			headerLeft: () => <BackButton
				onPress={() => {
					navigation.goBack();
				}}
			/>
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			activeSlide: 0,
			item: {
				photosArray: []
			},
			item1: {
				photosArray: []
			},
			category: {},
			defaultAnimationDialog: false,
			showflg: false
		};

	}

	componentDidMount() {

	}

	renderImage = ({ item }) => (
		<TouchableHighlight>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: SERVER_URL + item }} />
			</View>
		</TouchableHighlight>
	);



	onPhone = () => {
		this.setState({ defaultAnimationDialog: true });
	};

	onMessage = () => {
		this.props.navigation.navigate('Chat');
	};

	render() {
		const { activeSlide } = this.state;
		return (
			<View style={styles.container}>
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
					style={{ progressSize: 50 }}
				/>
				<ScrollView style={styles.scrollcontainer}>
					<View style={styles.carouselContainer}>
						<View style={styles.carousel}>
							<Carousel
								ref={c => {
									this.slider1Ref = c;
								}}
								data={this.props.product.photosArray}
								renderItem={this.renderImage}
								sliderWidth={viewportWidth}
								itemWidth={viewportWidth}
								inactiveSlideScale={1}
								inactiveSlideOpacity={1}
								firstItem={0}
								loop={false}
								autoplay={false}
								autoplayDelay={500}
								autoplayInterval={3000}
								onSnapToItem={index => this.setState({ activeSlide: index })}
							/>
							<Pagination
								dotsLength={this.props.product.photosArray.length}
								activeDotIndex={activeSlide}
								containerStyle={styles.paginationContainer}
								dotColor="rgba(255, 255, 255, 0.92)"
								dotStyle={styles.paginationDot}
								inactiveDotColor="white"
								inactiveDotOpacity={0.4}
								inactiveDotScale={0.8}
								carouselRef={this.slider1Ref}
								tappableDots={!!this.slider1Ref}
							/>
						</View>
					</View>
					<View style={styles.infoRecipeContainer}>
						<Text style={styles.infoRecipeName}>{this.props.product.Name}</Text>
						<Text style={styles.infoCost}>{this.props.product.price}</Text>
						<View style={styles.infoContainer}>
							<Image style={styles.infoPhoto} source={require('../../../assets/icons/ping.png')} />
							<Text style={styles.infoRecipe}>{this.props.product.Location} </Text>
						</View>
						<View style={styles.infoContainer}>
							<Image style={styles.infoPhoto1} source={require('../../../assets/icons/date.png')} />
							<Text style={styles.infoRecipe}>{this.props.product.Created_At} </Text>
						</View>
						
						<View style={styles.infoContainer}>
							<Text style={styles.infoDescriptionRecipe}>{this.props.product.Description}</Text>
						</View>
					</View>
				</ScrollView>
				<View style={styles.bottom}>
					<View style={styles.buttonContainer}>
						<Button buttonStyle={styles.buttonStyle} titleStyle={{ fontSize: 20 }} icon={<Icon name="phone" size={25} color="white" style={{ marginRight: 10 }} />} title="Phone" onPress={() => this.onPhone()} />
					</View>
					<View style={styles.buttonContainer}>
						<Button buttonStyle={styles.buttonStyle} titleStyle={{ fontSize: 20 }} icon={<Icon name="message1" size={25} color="white" style={{ marginRight: 10 }} />} title="Message" onPress={() => this.onMessage()} />
					</View>
				</View>
				<Dialog
					onDismiss={() => {
						this.setState({ defaultAnimationDialog: false })
					}}
					width={0.9}
					visible={this.state.defaultAnimationDialog}
					rounded
					actionsBordered
					dialogTitle={
						<DialogTitle
							title="Phone Number"
							style={{
								backgroundColor: 'white',
							}}
							hasTitleBar={false}
							align="left"
						/>
					}
					footer={
						<DialogFooter>
							<DialogButton
								text="OK"
								bordered
								onPress={() => {
									this.setState({ defaultAnimationDialog: false });
								}}
								key="button-1"
							/>
						</DialogFooter>
					}>
					<DialogContent
						style={{
							backgroundColor: 'white',
						}}>
						<Text style={{ fontSize: 30 }}>
							{this.props.category != {} ? this.props.category.phone : ""}
						</Text>
					</DialogContent>
				</Dialog>
			</View>
		);
	}
}