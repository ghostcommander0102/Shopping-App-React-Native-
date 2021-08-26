import { GETCATEGORIES_URL } from "../utils/api";
import { GET_CATEGORIES, CLEAR_CATEGORY, CATEGORY_ERROR, SET_CATEGORY, SET_SUBCATEGORIES } from "./types";

export const getCategories = (formData) => async (dispatch) => {
    dispatch({ type: CLEAR_CATEGORY });
    console.log(GETCATEGORIES_URL);
    try {
        return fetch(GETCATEGORIES_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "x-auth-token": formData.token
            }
        })
            .then(response => response.json())
            .then(json => {
                if (json.hasOwnProperty('error')) {
                }
                else {
                    dispatch({
                        type: GET_CATEGORIES,
                        payload: json
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: CATEGORY_ERROR
                });
            })
    } catch (err) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const setCategory = (formData) => async (dispatch) => {
    dispatch({
        type: SET_CATEGORY,
        payload: formData.category
    })
}

export const setSubCategory = (formData) => async (dispatch) => {
    console.log(formData);
    dispatch({
        type: SET_SUBCATEGORIES,
        payload: formData.category
    })
}