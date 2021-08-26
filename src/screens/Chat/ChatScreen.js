import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { HubConnectionBuilder, LogLevel} from "@microsoft/signalr";
export default class ChatScreen extends Component {
    state = {
        messages: [],
        hubConnection: null,
        message: '',
        nick: ''
    };

    componentDidMount() {
        // api.loadMessages((message) => {
        //   this.setState(previousState => ({
        //     messages: GiftedChat.append(previousState.messages, message),
        //   }));
        // });
        this.state.hubConnection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection', err));

        this.state.hubConnection.on('SendMessage', (nick, message) => {
            const text = `${nick}: ${message}`;
            const messages = this.state.messages.concat([text]);
            this.setState({messages});
        });
        var temp = this;
        this.state.hubConnection.on("ReceiveMessage", function (user, message) {
            // msg.createdAt = new Date();
            // msg.text = message;
            // msg.user._id = 1;
            // msg.user.name = "111";
            // console.log(message);
            console.log(message);
            temp.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, JSON.parse(message)),
            }));
            // We can assign user-supplied strings to an element's textContent because it
            // is not interpreted as markup. If you're assigning in any other way, you 
            // should be aware of possible script injection concerns.
        });
    }
    componentWillMount() {
        this.setState({
            hubConnection: new HubConnectionBuilder()
                .withUrl("http://10.0.2.2:60447/chatHub")
                .configureLogging(LogLevel.Debug)
                .build()
        });
    }
    componentWillUnmount() {
        //api.closeChat();
    }

    render() {
        const { messages } = this.state;
        // const { name } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={messages}
                    onSend={(message) => {
//                        console.log(message);
                        // this.setState(previousState => ({
                        //     messages: GiftedChat.append(previousState.messages, message),
                        // }));

                        this.state.hubConnection
                            .invoke('SendMessage', "123", JSON.stringify(message))
                            .catch(err => console.log(err.message));

                        this.setState({message: ''});
                        //api.sendMessage(message);
                    }}
                    user={{
                        _id: 1,
                        name: "111",
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
});
