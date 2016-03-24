import { fromJS } from 'immutable';

export const PLAY = 'PLAY';
export const STOP = 'STOP';


const INITIAL_STATE = fromJS([]);

function piano(state = INITIAL_STATE, action = { type: '', 
  payload: { id: 0 } }) {
  switch (action.type) {
    case PLAY:
      return state.push(action.payload);

    case STOP:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
}

export default piano;
