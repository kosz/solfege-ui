import { PLAY,
         STOP,
         BUILD_PIANO } from '../reducers/piano';

import buildPianoMetadata from '../bl/piano/build-piano-metadata';

export function buildPiano(octaves) {
  return {
    type: BUILD_PIANO,
    payload: {
      piano: buildPianoMetadata(octaves)
    }
  };
}

export function play(note) {
  return {
    type: PLAY,
    payload: { note }
  };
}

export function stop(note) {
  return {
    type: STOP,
    payload: { note }
  };
}
