import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import categories from './categories'
import product from './product'
export default combineReducers({
  alert,
  auth,
  categories,
  product
});
