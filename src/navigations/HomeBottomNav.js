import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BackButton from '../components/BackButton/BackButton'
import Home from '../screens/Home/Home';
import Product from '../screens/Product/Product';
import ProductList from '../screens/ProductList/ProductList';
import ChatScreen from '../screens/Chat/ChatScreen';
import Profile from '../screens/Profile/Profile';
import SubCategory from '../screens/SubCategories/SubCategory';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import { Button } from 'react-native-elements';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
export default class HomeBottomNav extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.setState({ navigation: this.props.navigation });
	}
	MYADSStack = () => {
		return (
			<Stack.Navigator
				initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
				/>
			</Stack.Navigator>
		);
	}
	HomeStack = () => {
		return (
			<Tab.Navigator
				tabBarOptions={{
					labelStyle: {
						fontSize: 15
					}
				}}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						var iconSize = size;
						var marginTop = 0;
						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'MY ADS') {
							iconName = focused ? 'heart' : 'heart-outline';
						} else if (route.name === 'Sign Out') {
							iconName = 'exit-outline';
						} else if (route.name === 'Profile') {
							iconName = focused ? 'person' : 'person-outline';
						} else if (route.name === 'Chat') {
							iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
						} else if (route.name === 'SELL') {
							iconName = 'add-circle-outline';
							iconSize = 70;
							marginTop = -20;
						}
						// You can return any component that you like here!
						if (route.name === 'SELL') {
							return <Image style={{ width: 70, height: 70, marginTop: -20 }} source={require('../../assets/icons/plus.png')} />
						} else { return <Icon name={iconName} style={{ marginTop: marginTop }} size={iconSize} color={color} />; }

					},
					tabBarActiveTintColor: 'blue',
					tabBarInactiveTintColor: 'gray',
				})}>
				<Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Tab.Screen name="Chat" options={{
					tabBarButton: (props) => (<TouchableOpacity  {...props} onPress={() => this.props.navigation.navigate('ChatList')} />),
				}} component={this.MYADSStack} />
				<Tab.Screen name="MY ADS" options={{
					tabBarButton: (props) => (<TouchableOpacity  {...props} onPress={() => this.props.navigation.navigate('AdsList')} />),
				}} component={this.MYADSStack} />
				<Tab.Screen name="SELL" options={{
					tabBarButton: (props) => (<TouchableOpacity  {...props} onPress={() => this.props.navigation.navigate('Categories')} />),
				}} component={this.MYADSStack} />
				<Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
				<Tab.Screen name="Sign Out" options={{
					tabBarButton: (props) => (<TouchableOpacity  {...props} onPress={() => this.props.navigation.navigate('Welcome')} />),
				}} component={Profile} />
			</Tab.Navigator>
		);
	}
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home" options={{ headerMode: 'screen' }}>
					<Stack.Screen
						name="Home"
						component={this.HomeStack}
						options={{ headerShown: false }} />
					<Stack.Screen
						name="ProductList"
						component={ProductList}
						options={{ title: 'ProductList' }} />
					<Stack.Screen
						name="Chat"
						component={ChatScreen}
					/>
					<Stack.Screen
						name="SubCategory"
						component={SubCategory}
						options={{title: '123'}}
					/>
					<Stack.Screen
						name="Product"
						component={Product}
						options={({ navigation }) => ({
							title: '',
							headerTransparent: true,
							headerLeft: () => <BackButton
								onPress={() => {
									navigation.goBack();
								}}
							/>
						})}
					/>
				</Stack.Navigator>

			</NavigationContainer>
		);
	}
}