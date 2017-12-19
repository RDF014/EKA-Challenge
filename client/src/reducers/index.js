
import { combineReducers } from 'redux';

// replace we different forms
import users from './users';
import userInfo from './userInfo';
import userAddress from './userAddress';

const rootReducer = combineReducers({
  users,
  userInfo,
  userAddress
});

export default rootReducer;
