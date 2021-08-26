import { GETPRODUCT_URL, GETPRODUCTS_URL, GETRECENTPRODUCTS_URL, GETADSPRODUCTS_URL } from "../utils/api";
import { GET_PRODUCT, GET_PRODUCTS, CLEAR_PRODUCT, PRODUCT_ERROR, PRODUCT_LOADING, GET_RECENTPRODUCTS, GET_ADS_PRODUCTS, ADS_PRODUCTS_LOADING } from "./types";

export const getProducts = (formData) => async (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT });
    dispatch({ type: PRODUCT_LOADING});
    try {
        return fetch(GETPRODUCTS_URL, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				"x-auth-token": formData.token
			}
		})
		.then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('error')){
			}
            else {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json
                });
			}
        })
        .catch((error) => {
            dispatch({
				type: PRODUCT_ERROR
			});
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getAdsProducts = (formData) => async (dispatch) => {
    dispatch({ type: ADS_PRODUCTS_LOADING});
    try {
        return fetch(GETADSPRODUCTS_URL, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				"x-auth-token": formData.token
			}
		})
		.then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('errors')){
                dispatch({
                    type: PRODUCT_ERROR,
                    payload: json
                });
			}
            else {
                console.log("adsdata");
                console.log(json);
                dispatch({
                    type: GET_ADS_PRODUCTS,
                    payload: json
                });
			}
        })
        .catch((error) => {
            console.log("adsdata1");
            dispatch({
				type: PRODUCT_ERROR,
                payload: error
			});
        })
    } catch (err) {
        console.log("adsdata2");
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getRecentProducts = (formData) => async (dispatch) => {
    try {
        console.log('asdf');
        console.log(formData);
        return fetch(GETRECENTPRODUCTS_URL, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				"x-auth-token": formData.token
			}
		})
		.then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('error')){
			}
            else {
                dispatch({
                    type: GET_RECENTPRODUCTS,
                    payload: json
                });
			}
        })
        .catch((error) => {
            dispatch({
				type: PRODUCT_ERROR
			});
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const getProduct = (formData) => async (dispatch) => {
    dispatch({ type: CLEAR_PRODUCT });
    dispatch({ type: PRODUCT_LOADING});
    try {
        return fetch(GETPRODUCT_URL, {
			method: 'GET',
			headers: {
				'Content-Type' : 'application/json',
				"x-auth-token": formData.token
			}
		})
		.then(response => response.json())
        .then(json => {
            if(json.hasOwnProperty('error')){
			}
            else {
                dispatch({
                    type: GET_PRODUCT,
                    payload: json
                });
			}
        })
        .catch((error) => {
            dispatch({
				type: PRODUCT_ERROR
			});
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};
