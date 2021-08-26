import api from './api';
import { AsyncStorage } from 'react-native';
const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    AsyncStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
     AsyncStorage.removeItem('token');
  }
};

export default setAuthToken;
