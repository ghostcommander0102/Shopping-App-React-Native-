import {
    GET_MESSAGES,
    GET_MESSAGE,
    SEND_MESSAGE
} from '../actions/types';
import { AsyncStorage } from 'react-native';
const initialState = {
    messages: [{}],
    message: {},
};

function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: payload
            }
            break;
        case GET_MESSAGE:
            return {
                ...state,
                message: payload
            }
        default:
            return state;
    }
}

export default authReducer;
