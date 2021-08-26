import axios from 'react-native-axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

const BASE_URL = 'http://192.168.104.111:5000/api'
export const SERVER_URL = 'http://192.168.104.111:5000';
export const REGISTER_URL = BASE_URL + "/users/";
export const LOGIN_URL = BASE_URL + "/auth/";
export const LOADUSER_URL = BASE_URL + "/auth/";

export const GETCATEGORIES_URL = BASE_URL + "/categories/";

export const GETRECENTPRODUCTS_URL = BASE_URL + "/products/";
export const GETPRODUCTS_URL = BASE_URL + "/products/";
export const GETADSPRODUCTS_URL = BASE_URL + "/products/";
export const GETPRODUCT_URL = BASE_URL + "/products/product/";

export const SENDMESSAGE_URL = BASE_URL + "/products/send";
export const GETMESSAGE_URL = BASE_URL + "/products/get";
