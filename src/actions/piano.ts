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
  return (dispatch, getState) => {
    if (shouldPlay(getState(), note)) { 
      return dispatch(startPlay(note));
    }  
  };
}

function shouldPlay(state, note) {
  return !state.piano.getIn(['piano', note]).playing;
}

function startPlay(note) {
  let audioElementInsideThePage: any = 
    document.querySelector('#' + note.replace('#', 'sharp'));
  audioElementInsideThePage.play();
  return {
    type: PLAY,
    payload: { note }
  };
}

export function stop(note) {
  return (dispatch, getState) => {
    if (shouldStop(getState(), note)) { 
      return dispatch(stopPlay(note));
    }
  };
}

function shouldStop(state, note) {
  return state.piano.getIn(['piano', note]).playing;
}

function stopPlay(note) {

  let audioElementInsideThePage: any = 
    document.querySelector('#' + note.replace('#', 'sharp'));
    audioElementInsideThePage.pause();
    audioElementInsideThePage.currentTime = 0;
  
  return {
    type: STOP,
    payload: { note }
  };
}
