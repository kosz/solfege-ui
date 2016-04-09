const R = require('ramda');
import { OrderedMap } from 'immutable';

/**
 * @funciton buildPianoMetadata
 * 
 * Builds metadata for a custom piano object 
 * which will be used as the data kept in the immutable store.
 */
export default function buildPianoMetadata(octaveCount, startingOctave = 1) {
  let pianoMetadata = OrderedMap();
  let currentStart = startingSvgPoint;
  let startingNote = startingOctave === 1 ? 1 : startingOctave * 12 - 11;
  
  for (let i = startingNote;
       pianoMetadata.size < octaveCount * notesInOctave;
       i += 1) {

    let note = getNoteForIteratorPositon(i);
    let color = note.match(/#/) ? black : white;

    pianoMetadata = pianoMetadata.set(note, {
      note,
      playing: false,
      svg: buildSvgCode[color](getSvgPoints[color](currentStart)),
      style: style[color]
    });

    currentStart = color === white ? currentStart + 20 + 2 : currentStart;

  }

  return pianoMetadata.sortBy((note: any) => !!note.note.match(/#/));
  
}

const black = 'black';
const white = 'white';
const startingSvgPoint = 1;
const notesInOctave = 12;

export const getSvgPoints = {
  white: currentStart => ({
    start: currentStart,
    stop: currentStart + 20
  }),
  black: currentStart => ({
    start: currentStart - 8,
    stop: currentStart + 7
  })
};

const buildSvgCode = {
  white: ({start, stop}) => 
    `${start},7.5 ${start},82.5 ${stop},82.5 ${stop},7.5`,
  black: ({start, stop}) => 
    `${start},7.5 ${start},54.5 ${stop},54.5 ${stop},7.5`
};

export const getNoteForIteratorPositon = position => {
  let pos = position;
  let octave = 1;
  while (pos > 12) {
    pos -= 12;
    octave += 1;
  }
  return `${octave}${notes[pos - 1]}`;
};
  
const style = {
  white: {
    fill: '#FFFFFF',
    stroke: '#000000',
      zIndex: 10
  },
  black: {
    stroke: '#000000',
    zIndex: 1000
  }
};

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#',
              'g', 'g#', 'a', 'a#', 'b' ];
