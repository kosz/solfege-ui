export const PLAY = 'PLAY';
export const STOP = 'STOP';

export function play(note) {
  return {
    type: PLAY,
    note
  };
}

export function stop(note) {
  return {
    type: STOP,
    note
  };
}
