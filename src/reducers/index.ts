import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import piano from './piano';
import session from './session';


const rootReducer = combineReducers({
  session,
  counter,
  piano,
  routing: routeReducer,
  form: formReducer,
});


export default rootReducer;
