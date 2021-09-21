import { combineReducers } from 'redux';
import authReducer from './auth'

const rootReducer = combineReducers({
    authentication: authReducer
});

export default rootReducer