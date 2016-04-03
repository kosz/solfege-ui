/**
 * @funciton buildPianoMetadata
 * 
 * Builds metadata for a custom piano object 
 * which will be used as the data kept in the immutable store.
 */
export default function buildPianoMetadata(octaveCount) {
  let pianoMetadata = [];
  let currentStart = startingPoint;
  
  for (let i = 1; pianoMetadata.length < octaveCount * notesInOctave; i += 1) {

    let note = getNoteForIteratorPositon(i);
    let color = note.match(/#/) ? black : white;

    pianoMetadata.push({
      note,
      svg: buildSvgCode[color](getSvgPoints[color](currentStart)),
      style: style[color]
    });

    currentStart = color === white ? currentStart + 20 + 2 : currentStart;

  }
  
  return pianoMetadata;
}

const black = 'black';
const white = 'white';
const startingPoint = 1;
const notesInOctave = 12;

export const getSvgPoints = {
  white: currentStart => ({
    start: currentStart,
    stop: currentStart + 20
  }),
  black: currentStart => ({
    start: currentStart + 10,
    stop: currentStart + 25
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
  while (pos > 12) {
    pos -= 12;
  }  
  return notes[pos - 1];
};
  
const style = {
  white: {
    fill: '#FFFFFF',
    stroke: '#000000'
  },
  black: {
    stroke: '#000000'
  }
};

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#',
              'g', 'g#', 'a', 'a#', 'b' ];
