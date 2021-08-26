import {
    GET_CATEGORIES,
    CLEAR_CATEGORY,
    SET_CATEGORY,
    SET_SUBCATEGORIES
} from '../actions/types';
const initialState = {
    category: null,
    subcategories: [],
    categories: [],
    loading: true,
    error: {}
};

function categoryReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload,
                loading: false
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: payload,
                loading: false
            }
        case SET_SUBCATEGORIES:
            return {
                ...state,
                subcategories: payload,
                loading: false
            }
        case CLEAR_CATEGORY:
            return {
                ...state,
                category: {}
              };
        default:
            return state;
    }
}

export default categoryReducer;
