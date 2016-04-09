import { fromJS } from 'immutable';
import buildPianoMetadata from '../bl/piano/build-piano-metadata';
const R = require('ramda');

export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const BUILD_PIANO = 'BUILD_PIANO';

const INITIAL_STATE = fromJS({
  piano: buildPianoMetadata(3, 3)
});

function piano(state = INITIAL_STATE, action = { type: '', 
  payload: { note: 'c', piano: {} } }) {
  switch (action.type) {

    case BUILD_PIANO:
      return state.set('piano', action.payload.piano);

    case PLAY:
      return state.updateIn(
        ['piano', action.payload.note],
        note => R.merge(note, { playing: true })
      );

    case STOP:
      return state.updateIn(
        ['piano', action.payload.note],
        note => R.merge(note, { playing: false })
      );

    default:
      return state;
  }
}

export default piano;
