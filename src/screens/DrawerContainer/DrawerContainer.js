import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.content}>
				<View style={styles.top}>
					<Image source={{uri: this.props.user.avatar}} style={{width:100,height:100,borderRadius:50}}/>
				</View>
				<View style={styles.container}>
					<MenuButton
						title="HOME"
						source={require('../../../assets/icons/home.png')}
						onPress={() => {
							navigation.navigate('Home');
							navigation.closeDrawer();
						}}
					/>
					<MenuButton
						title="My Ads"
						source={require('../../../assets/img/card.png')}
						onPress={() => {
							navigation.navigate('Products');
							navigation.closeDrawer();
						}}
					/>
					<MenuButton
						title="Profile"
						source={require('../../../assets/img/android-settings.png')}
						onPress={() => {
							navigation.navigate('Profile');
							navigation.closeDrawer();
						}}
					/>
					<MenuButton
						title="Logout"
						source={require('../../../assets/img/log-out.png')}
						onPress={() => {
							this.props.logOut();
							navigation.navigate('Welcome');
							navigation.closeDrawer();
						}}
					/>
				</View>
			</View>
		);
	}
}

DrawerContainer.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	})
};
