import { PLAY, STOP } from '../reducers/piano';

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
