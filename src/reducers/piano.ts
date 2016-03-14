import {
  PLAY,
  STOP
} from '../actions/piano';
import { fromJS } from 'immutable';


const INITIAL_STATE = fromJS([]);

function piano(state = INITIAL_STATE, 
    action = { type: '', payload: { note: 'C' }} ) {
  switch (action.type) {

  case PLAY:
    return state.push(action.payload.note);

  case STOP:
    return state.filter((obj) => obj === action.payload.note);

  default:
    return state;
  }
}

export default piano;
