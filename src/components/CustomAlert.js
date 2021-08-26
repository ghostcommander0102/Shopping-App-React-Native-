import React from "react";
import AwesomeAlert from 'react-native-awesome-alerts';
export default class CustomAlert extends React.Component {
    render() {
        return (
            <AwesomeAlert
                show={this.props.showflg}
                showProgress={false}
                title={this.props.alertTitle}
                message={this.props.alertMessage}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    // this.props.hideAlert();
                }}
                onConfirmPressed={() => {
                    this.props.hideAlert();
                }}
            />
        );
    }
}