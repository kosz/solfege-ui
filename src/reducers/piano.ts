import { fromJS } from 'immutable';

export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const BUILD_PIANO = 'BUILD_PIANO';

const INITIAL_STATE = fromJS({
  piano: {}
});

function piano(state = INITIAL_STATE, action = { type: '', 
  payload: { note: 'c', piano: {} } }) {
  switch (action.type) {

    case BUILD_PIANO:
      return state.set('piano', action.payload.piano);

    case PLAY:
      //return state.push(action.payload);
      return state;

    case STOP:
      //return state.filter(item => item.note !== action.payload.note);
      return state;

    default:
      return state;
  }
}

export default piano;
