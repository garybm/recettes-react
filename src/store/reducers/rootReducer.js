import authReducer from './authReducer'
import recipeReducer from './recipeReducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer
});

export default rootReducer;

// the key name will be the data property on the state object