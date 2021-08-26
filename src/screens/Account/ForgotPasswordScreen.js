import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Alert,
	ActivityIndicator,
	Image,
	ImageBackground
} from "react-native";
import Button from "react-native-button";
import { AppStyles } from "./AppStyles";
import { AsyncStorage } from "react-native";
import CustomAlert from "../../components/CustomAlert";

export default class ForgotPasswordScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: ""
		};
	};
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			email: "",
			showflg: false,
			alertTitle: "",
			alertMessage: ""
		};
	}

	onPressLogin = async () => {
		const { email } = this.state;
		if (email.length <= 0) {
			this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "Please fill the required fields!" });
			return;
		}
		// await this.props.onLogin({ email, password })

	};



	render() {
		return (
			<View style={styles.container}>
				<CustomAlert showflg={this.state.showflg} hideAlert={this.hideAlert} alertTitle={this.state.alertTitle} alertMessage={this.state.alertMessage} />
				<Text style={[styles.title, styles.leftTitle]}>Forgot Password</Text>
				<Image source={require("../../../assets/img/logo.png")} style={AppStyles.img} />
				<View style={styles.InputContainer}>
					<TextInput
						style={styles.body}
						placeholder="E-mail"
						onChangeText={text => this.setState({ email: text })}
						value={this.state.email}
						placeholderTextColor={AppStyles.color.grey}
						underlineColorAndroid="transparent"
					/>
				</View>


				<Button
					containerStyle={styles.loginContainer}
					style={styles.loginText}
					onPress={() => this.onPressLogin()}
				>
					Send
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
		fontSize: 10,
		textAlign: "right"
	},
});

