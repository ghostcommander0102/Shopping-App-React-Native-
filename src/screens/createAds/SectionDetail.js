import React from "react";
import {
	StyleSheet,
	View,
} from "react-native";
import Button from "react-native-button";
import CustomAlert from "../../components/CustomAlert";
import { TextInput } from 'react-native-paper';


export default class SectionDetail extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: "Include some details"
		};
	};
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			Title: "",
			Description: "",
			showflg: false,
			alertTitle: "",
			alertMessage: "",
		};
	}
	componentDidMount() {

	}
	onPressLogin = () => {
		const { Title, Description } = this.state;
		if (Title.length <= 0 || Description.length <= 0) {
			this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "Please fill the required fields!" });
			return;
		}
		this.props.onLogin({ Title, Description })
	};

	onPressForgotDescription = () => {
		this.props.navigation.navigate("ForgotDescription");
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
				<TextInput
					label='Ad title*'
					value={this.state.Title}
					onChangeText={text => this.setState({ Title: text })}
					style={styles.InputStyle}
					underlineColor='green'
					selectionColor='green'
				/>
				<TextInput
					label='Describe what you are selling*'
					value={this.state.Description}
					onChangeText={text => this.setState({ Description: text })}
					style={styles.InputStyle}
					underlineColor='green'
					selectionColor='green'
					multiline={true}
					numberOfLines={5}
				/>
				<Button
					containerStyle={styles.NextBtn}
					style={styles.ButtonText}
					onPress={() => this.onPressLogin()}
				>
					Next
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		height: '100%',
		padding: 20,
	},
	InputStyle: {
		backgroundColor: 'white',
		marginTop: 20,
		padding: 0
	},
	NextBtn: {
		alignSelf:'center',
		marginTop: 20,
		height: 50,
		width: '80%',
		borderRadius: 10,
		backgroundColor: '#002f52',
		padding: 10
	},
	ButtonText: {
		color: 'white',
		fontSize: 20
	},
});