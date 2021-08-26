import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home/Home';
import Product from '../screens/Product/Product';
import ProductList from '../screens/ProductList/ProductList';
import Drawer from '../screens/DrawerContainer/Drawer';
import Login from '../screens/Account/Login';
import Signup from '../screens/Account/Signup';
import WelcomeScreen from '../screens/Account/WelcomeScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import ForgotPasswordScreen from '../screens/Account/ForgotPasswordScreen';
import Profile from '../screens/Profile/Profile';
import HomeBottomNav from './HomeBottomNav';
import Categories from '../screens/Categories/Categories';
import CreateAdsSubCategory from '../screens/CreateAdsSubCategory/CreateAdsSubCategory';
import SectionDetail from '../screens/createAds/SectionDetail';
import AdsList from '../screens/AdsList/AdsList';
import ChatListScreen from '../screens/ChatList/ChatListScreen';
const AccountNavigator = createStackNavigator(
{
	Welcome: WelcomeScreen,
	Signin: Login,
	Signup: Signup,
	ForgotPassword: ForgotPasswordScreen
},{
	defaulfNavigationOptions: ({ navigation }) => ({
		
		headerTitleStyle: {
			fontWeight: 'bold',
			textAlign: 'center',
			alignSelf: 'center',
			flex: 1,
		}
	})
});
const HomeNavigator = createStackNavigator(
	{
		HomeBottomNav: HomeBottomNav,
		Categories: Categories,
		CreateAdsSubCategory: CreateAdsSubCategory,
		SectionDetail: SectionDetail,
		AdsList: AdsList,
		Product: Product,
		ChatList: ChatListScreen,
		Chat: ChatScreen
	},{
		defaulfNavigationOptions: ({ navigation }) => ({
			headerTitleStyle: {
				fontWeight: 'bold',
				textAlign: 'center',
				alignSelf: 'center',
				flex: 1,
			}
		})
	}
)
const MainNavigator = createStackNavigator(
	{
		LoginStack: AccountNavigator,
		HomeStack: HomeNavigator
	},
	{
		initialRouteName: 'LoginStack',
		headerMode: 'none'
	}
);

const DrawerStack = createDrawerNavigator(
	{
		Main: MainNavigator
	},
	{
		drawerPosition: 'left',
		initialRouteName: 'Main',
		drawerWidth: 250,
		contentComponent: Drawer
	}
);

export default AppContainer = createAppContainer(DrawerStack);