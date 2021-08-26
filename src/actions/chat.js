import { SENDMESSAGE_URL, GETMESSAGE_URL } from '../utils/api';
import { setAlert } from './alert';
import {
	GET_MESSAGE, SEND_MESSAGE, MESSAGE_ERROR
} from './types';
// Load Message
export const loadMessage = (formData) => async dispatch => {
	try {
		return fetch(GETMESSAGE_URL, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				"x-auth-token": formData.token
			}
		})
		.then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('error')){
                dispatch({
					type: MESSAGE_ERROR
				});
			}
            else {
                dispatch({
					type: GET_MESSAGE,
					payload: json
				});
			}
        })
        .catch((error) => {
            dispatch({
				type: MESSAGE_ERROR
			});
        })
	} catch (err) {
		dispatch({
			type: MESSAGE_ERROR
		});
	}
};
