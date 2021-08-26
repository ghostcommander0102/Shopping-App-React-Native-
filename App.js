import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import { store } from './src/store';
import { loadUser } from './src/actions/auth';
import { LOGOUT } from './src/actions/types';

export default function App() {
	useEffect(() => {
		// check for token in LS
		// if (AsyncStorage.token) {
		// 	setAuthToken(AsyncStorage.token);
		// 	store.dispatch(loadUser(token));
		// }
		// if (!AsyncStorage.token) store.dispatch({ type: LOGOUT });
		store.dispatch({type: LOGOUT});
	}, []);

	return (
		<Provider store={store}>
				<AppContainer />
		</Provider>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
});