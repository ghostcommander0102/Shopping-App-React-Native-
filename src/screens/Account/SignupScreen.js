import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "./AppStyles";
import CustomAlert from "../../components/CustomAlert";
import { ScrollView } from "react-native-gesture-handler";
export default class SignupScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			FirstName: "",
			LastName: "",
			PhoneNumber: "",
			Email: "",
			Password: "",
			ConfirmPassword: "",
			showflg: false,
			alertTitle: "",
			alertMessage: ""
		};
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		this.authSubscription && this.authSubscription();
	}

	onRegister = async () => {
		const { FirstName, PhoneNumber, Email, Password, ConfirmPassword } = this.state;
		if (FirstName.length <= 0 || PhoneNumber.length <= 0 || Email.length <= 0 || Password.length <= 0) {
			this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "Please fill the required fields!" });
			return;
		}
		if(Password.length < 6){
			this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "The Password must be at least 6 characters long."});
			return;
		}
		if(Password != ConfirmPassword) {
			this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "The password and confirmation password do not match."});
			return;
		}
		await this.props.onRegister({ FirstName, PhoneNumber, Email, Password });
	};
	hideAlert = () => {
		this.setState({ showflg: false });
	}
	render() {
		if (this.props.isAuthenticated) {
			this.props.navigation.navigate("Home")
		}
		return (
			<ScrollView style={{backgroundColor: "white", paddingBottom: 15}}>
				<View style={styles.container}>
					<CustomAlert showflg={this.state.showflg} hideAlert={this.hideAlert} alertTitle={this.state.alertTitle} alertMessage={this.state.alertMessage} />
					<Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
					<Image source={require("../../../assets/img/logo.png")} style={AppStyles.img} />
					<View style={styles.InputContainer}>
						<View style={styles.searchSection}>
							<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-person.png')} />
							<TextInput
								style={styles.input}
								placeholder="First Name"
								onChangeText={text => this.setState({ FirstName: text })}
								value={this.state.FirstName}
								placeholderTextColor={AppStyles.color.grey}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					<View style={styles.InputContainer}>
						<View style={styles.searchSection}>
							<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-person.png')} />
							<TextInput
								style={styles.input}
								placeholder="Last Name"
								onChangeText={text => this.setState({ LastName: text })}
								value={this.state.LastName}
								placeholderTextColor={AppStyles.color.grey}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					<View style={styles.InputContainer}>
						<View style={styles.searchSection}>
							<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-telephone.png')} />
							<TextInput
								style={styles.input}
								placeholder="PhoneNumber"
								onChangeText={text => this.setState({ PhoneNumber: text })}
								value={this.state.PhoneNumber}
								placeholderTextColor={AppStyles.color.grey}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					<View style={styles.InputContainer}>
						<View style={styles.searchSection}>
							<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-email.png')} />
							<TextInput
								style={styles.input}
								placeholder="E-mail Address"
								onChangeText={text => this.setState({ Email: text })}
								value={this.state.Email}
								placeholderTextColor={AppStyles.color.grey}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					<View style={styles.InputContainer}>
						<View style={styles.searchSection}>
							<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-locked.png')} />
							<TextInput
								style={styles.input}
								placeholder="Password"
								secureTextEntry={true}
								onChangeText={text => this.setState({ Password: text })}
								value={this.state.Password}
								placeholderTextColor={AppStyles.color.grey}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					<View style={styles.InputContainer}>
						<View style={styles.searchSection}>
							<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-locked.png')} />
							<TextInput
								style={styles.input}
								placeholder="ConfirmPassword"
								secureTextEntry={true}
								onChangeText={text => this.setState({ ConfirmPassword: text })}
								value={this.state.ConfirmPassword}
								placeholderTextColor={AppStyles.color.grey}
								underlineColorAndroid="transparent"
							/>
						</View>
					</View>
					<Button
						containerStyle={[styles.loginContainer, { marginTop: 50 }]}
						style={{color: 'white'}}
						onPress={() => this.onRegister()}
						color='#ffffff'
					>
						Sign Up
					</Button>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: AppStyles.color.white
	},
	title: {
		fontSize: AppStyles.fontSize.title,
		fontWeight: "bold",
		color: AppStyles.color.tint,
		marginTop: 20,
		marginBottom: 20
	},
	leftTitle: {
		alignSelf: "stretch",
		textAlign: "left",
		marginLeft: 20
	},
	content: {
		paddingLeft: 50,
		paddingRight: 50,
		textAlign: "center",
		fontSize: AppStyles.fontSize.content,
		color: AppStyles.color.text
	},
	loginContainer: {
		width: AppStyles.buttonWidth.main,
		backgroundColor: AppStyles.color.tint,
		borderRadius: AppStyles.borderRadius.main,
		padding: 10,
		marginTop: 30,
	},
	loginText: {
		color: AppStyles.color.white
	},
	placeholder: {
		color: "red"
	},
	InputContainer: {
		width: AppStyles.textInputWidth.main,
		marginTop: 20,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: AppStyles.color.grey,
		borderRadius: AppStyles.borderRadius.main
	},
	body: {
		height: 42,
		paddingLeft: 20,
		paddingRight: 20,
		color: AppStyles.color.text
	},
	searchSection: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchIcon: {
		padding: 15,
		marginLeft: 10,
		width: 20,
		height: 20
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		color: '#424242',
	},
	loginContainer: {
		width: AppStyles.buttonWidth.main,
		backgroundColor: AppStyles.color.tint,
		borderRadius: AppStyles.borderRadius.main,
		padding: 10,
		marginTop: 30
	}
});

