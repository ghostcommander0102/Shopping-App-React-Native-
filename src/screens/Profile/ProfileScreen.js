import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Button } from 'react-native-elements';
import { AppStyles } from "./AppStyles";
import CustomAlert from "../../components/CustomAlert";
import MenuImage from "../../components/MenuImage/MenuImage";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Profile',
            headerLeft: () => <MenuImage
                onPress={() => {
                    navigation.openDrawer();
                }}
            />,
            headerRight: () => <Button titleStyle={{ fontSize: 20 }} type="clear" title={navigation.getParam('title')} onPress={navigation.getParam('onEdit')} />
        };
    };
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            fullname: "",
            phone: "",
            email: "",
            password: "",
            showflg: false,
            alertTitle: "",
            alertMessage: "",
            editable: false,
        };
    }

    componentDidMount() {

        console.log(this.props.navigation);
        this.props.navigation.setParams({ title: "Edit" });
        this.props.navigation.setParams({ onEdit: this.onEdit });
        this.setState({
            fullname: this.props.user.name,
            phone: this.props.user.phone,
            email: this.props.user.email
        })
    }

    componentWillUnmount() {
        this.authSubscription && this.authSubscription();
    }

    onEdit = () => {
        if (this.state.editable == false) {
            this.props.navigation.setParams({ title: "Cancel" });
            this.setState({ editable: true });
        } else {
            this.props.navigation.setParams({ title: "Edit" });
            this.setState({ editable: false });
            this.setState({
                fullname: this.props.user.name,
                phone: this.props.user.phone,
                email: this.props.user.email
            })
        }

    }

    onRegister = async () => {
        const { fullname, phone, email, password } = this.state;
        if (fullname.length < 0 || phone.length < 0 || email.length < 0 || password.length < 0) {
            this.setState({ showflg: true, alertTitle: "Warning", alertMessage: "Please fill the required fields!" });
            return;
        }
        await this.props.onRegister({ fullname, phone, email, password });
    };
    hideAlert = () => {
        this.setState({ showflg: false });
    }
    render() {
        if (this.props.isAuthenticated) {
            this.props.navigation.navigate("Home")
        }
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.header}>
                    <TouchableHighlight underlayColor={this.state.editable?'grey':'white'} style={[styles.EditBtnContainer, this.state.editable?styles.EditBtnBackground:""]} onPress={this.onEdit}>
                        <Icon name="account-edit" size={30} color={this.state.editable?"white":"grey"} />
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <CustomAlert showflg={this.state.showflg} hideAlert={this.hideAlert} alertTitle={this.state.alertTitle} alertMessage={this.state.alertMessage} />

                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    {/* <Image source={{ uri: this.props.user.avatar }} style={styles.avatar} /> */}
                    <View style={styles.InputContainer}>
                        <View style={styles.searchSection}>
                            <Icon name="account" size={30} color="grey" style={{ marginLeft: 10, marginRight: 10 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                onChangeText={text => this.setState({ fullname: text })}
                                value={this.state.fullname}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                editable={this.state.editable}
                            />
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        <View style={styles.searchSection}>
                            <Icon name="cellphone-android" size={30} color="grey" style={{ marginLeft: 10, marginRight: 10 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                onChangeText={text => this.setState({ phone: text })}
                                value={this.state.phone}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                editable={this.state.editable}
                            />
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        <View style={styles.searchSection}>
                            <Icon name="mail" size={30} color="grey" style={{ marginLeft: 10, marginRight: 10 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail Address"
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                editable={this.state.editable}
                            />
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        <View style={styles.searchSection}>
                            <Icon name="form-textbox-lock" size={30} color="grey" style={{ marginLeft: 10, marginRight: 10 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={text => this.setState({ password: text })}
                                value={this.state.password}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                editable={this.state.editable}
                            />
                        </View>
                    </View>
                    <View style={styles.InputContainer}>
                        <View style={styles.searchSection}>
                            <Icon name="form-textbox-lock" size={30} color="grey" style={{ marginLeft: 10, marginRight: 10 }} />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                onChangeText={text => this.setState({ password: text })}
                                value={this.state.password}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                editable={this.state.editable}
                            />
                        </View>
                    </View>
                    {this.state.editable && <Button buttonStyle={styles.buttonStyle} titleStyle={{ fontSize: 20 }} title="Update" onPress={() => this.onRegister()} />}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: -80,
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 180,
        alignItems: 'flex-end'
    },
    EditBtnContainer: {
        marginTop: 50,
        alignItems: 'center',
        borderRadius: 180,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    EditBtnBackground: {
        backgroundColor: 'grey'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',

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
        marginTop: 20,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: 'grey',
        borderRadius: 10
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
        color: AppStyles.color.blue,
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
    buttonStyle: {
        marginTop: 40,
        width: 250,
        color: AppStyles.color.white,
        borderRadius: AppStyles.borderRadius.main,
    }

});

