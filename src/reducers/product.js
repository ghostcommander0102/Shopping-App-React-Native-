import {
    GET_PRODUCTS,
    GET_PRODUCT,
    CLEAR_PRODUCT,
    PRODUCT_ERROR,
    PRODUCT_LOADING,
    GET_RECENTPRODUCTS,
    RECENT_PRODUCTS_LOADING,
    ADS_PRODUCTS_LOADING,
    GET_ADS_PRODUCTS
} from '../actions/types';
const initialState = {
    product: {
        photosArray: []
    },
    adsproducts: [],
    products: [],
    recent_products: [],
    loading: false,
    loading_recent: false,
    loading_ads: false,
    error: {}
};

function productReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PRODUCT_ERROR:
            return {
                ...state,
                error: payload
            }
            break;
        case RECENT_PRODUCTS_LOADING:
            return {
                ...state,
                loading_recent: true
            }
            break;
        case ADS_PRODUCTS_LOADING:
            return {
                ...state,
                loading_ads: true
            }
            break;
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case GET_ADS_PRODUCTS:
            return {
                ...state,
                adsproducts: payload,
                loading_ads: false
            };
        case GET_RECENTPRODUCTS:
            return {
                ...state,
                recent_products: payload,
                loading_recent: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload,
                loading: false
            }
        case CLEAR_PRODUCT:
            return {
                ...state,
                product: {
                    photosArray: []
                }
            };
        default:
            return state;
    }
}

export default productReducer;
