import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Alert,
	ActivityIndicator,
	Image,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import Button from "react-native-button";
import CustomAlert from "../../components/CustomAlert";
import { AppStyles } from "./AppStyles";


export default class LoginScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Sign in"
		};
	};
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			Email: "",
			Password: "",
			showflg: false,
			alertTitle: "",
			alertMessage: "",
		};
	}
	componentDidMount() {

	}
	onPressLogin = () => {
		const { Email, Password } = this.state;
		if (Email.length <= 0 || Password.length <= 0) {
			this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "Please fill the required fields!" });
			return;
		}
		this.props.onLogin({ Email, Password })

	};

	onPressForgotpassword = () => {
		this.props.navigation.navigate("ForgotPassword");
	}

	hideAlert = () => {
		this.setState({ showflg: false });
	}
	render() {
		if (this.props.isAuthenticated)
			this.props.navigation.navigate("HomeBottomNav");
		const { showflg } = this.state;
		console.log(showflg);
		return (
			<View style={styles.container}>
				<CustomAlert showflg={this.state.showflg} hideAlert={this.hideAlert} alertTitle={this.state.alertTitle} alertMessage={this.state.alertMessage} />
				<Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
				<Image source={require("../../../assets/img/logo.png")} style={AppStyles.img} />
				<View style={styles.InputContainer}>
					<View style={styles.searchSection}>
						<Image style={styles.searchIcon} source={require('../../../assets/img/ios7-email.png')} />
						<TextInput
							style={styles.input}
							placeholder="E-mail or phone number"
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
							secureTextEntry={true}
							placeholder="Password"
							onChangeText={text => this.setState({ Password: text })}
							value={this.state.Password}
							placeholderTextColor={AppStyles.color.grey}
							underlineColorAndroid="transparent"
						/>
					</View>
				</View>


				<Button
					containerStyle={styles.loginContainer}
					style={styles.loginText}
					onPress={() => this.onPressLogin()}
				>
					Log in
				</Button>
				<Button
					containerStyle={styles.forgotBtn}
					onPress={() => this.onPressForgotpassword()}
				>
					Forgot password?
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppStyles.color.white,
		marginTop: -150,
		alignItems: "center",
		justifyContent: "center"
	},
	or: {
		color: "black",
		marginTop: 40,
		marginBottom: 10
	},
	title: {
		fontSize: AppStyles.fontSize.title,
		fontWeight: "bold",
		color: AppStyles.color.tint,
		marginTop: 20,
		marginBottom: 20,

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
		marginTop: 30
	},
	loginText: {
		color: AppStyles.color.white
	},
	placeholder: {
		color: "red"
	},
	InputContainer: {
		width: AppStyles.textInputWidth.main,
		marginTop: 30,
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
	forgotBtn: {
		height: 45,
		marginTop: 40,
		fontSize: 10
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
});