import { REGISTER_URL, LOADUSER_URL, LOGIN_URL } from '../utils/api';
import { setAlert } from './alert';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT
} from './types';
import { AsyncStorage } from 'react-native';
// Load User
export const loadUser = (token) => async dispatch => {
	try {
		return fetch(LOADUSER_URL, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				"x-auth-token": token
			}
		})
		.then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('error')){
                dispatch({
					type: REGISTER_FAIL
				});
			}
            else {
                dispatch({
					type: USER_LOADED,
					payload: json
				});
			}
        })
        .catch((error) => {
            dispatch({
				type: REGISTER_FAIL
			});
        })
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

// Register User
export const register = formData => async dispatch => {
	try {
		return fetch(REGISTER_URL,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
			body: JSON.stringify({
				FirstName: formData.FirstName,
				LastName: formData.Lastname,
				PhoneNumber: formData.PhoneNumber,
				Email: formData.Email,
				Password: formData.Password,
				ConfirmPassword: formData.ConfirmPassword
			})
        })
        .then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('errors')){
                dispatch({
					type: REGISTER_FAIL
				});
			}
            else {
                dispatch({
					type: REGISTER_SUCCESS,
					payload: json
				});
				AsyncStorage.setItem("token", json.token);
				dispatch(loadUser(json.token));
			}
        })
        .catch((error) => {
            dispatch({
				type: REGISTER_FAIL
			});
        })
		
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: REGISTER_FAIL
		});
	}
};

// Login User
export const login = formData => async dispatch => {
	console.log(formData);
	try {
		return fetch(LOGIN_URL,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
			body: JSON.stringify({
				Email: formData.Email,
				Password: formData.Password
			})
        })
        .then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('errors')){
                dispatch({
					type: LOGIN_FAIL
				});
			}
            else {
                dispatch({
					type: LOGIN_SUCCESS,
					payload: json
				});
				AsyncStorage.setItem("token", json.token);
				dispatch(loadUser(json.token));
			}
        })
        .catch((error) => {
			console.log(error);
            dispatch({
				type: LOGIN_FAIL,
				payload: error
			});
        })

		
	} catch (err) {
		console.log(err);
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: LOGIN_FAIL
		});
	}
};

export const update = formData => async dispatch => {
	try {
		return fetch(REGISTER_URL,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
			body: JSON.stringify({
				name: formData.fullname,
				phone: formData.phone,
				email: formData.email,
				password: formData.password
			})
        })
        .then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('error')){
                dispatch({
					type: REGISTER_FAIL
				});
			}
            else {
                dispatch({
					type: REGISTER_SUCCESS,
					payload: json
				});
				AsyncStorage.setItem("token", json.token);
				dispatch(loadUser(json.token));
			}
        })
        .catch((error) => {
			console.log(error)
            dispatch({
				type: REGISTER_FAIL,
				payload: error
			});
        })
		
	} catch (err) {
		console.log(err);
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: REGISTER_FAIL
		});
	}
};

// Logout
export const logout = formData => async dispatch => { 
	dispatch({type: LOGOUT });
};
