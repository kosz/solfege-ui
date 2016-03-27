/**
 * @funciton buildPianoMetadata
 * 
 * Builds metadata for a custom piano object 
 * which will be used as the data kept in the immutable store.
 */
export default function buildPianoMetadata(octaveCount) {
  let pianoMetadata = [];
  let currentStart = startingPoint;
  
  for (let i = 0; pianoMetadata.length < octaveCount * notesInOctave; i += 1) {
    //let currentStop = currentStart +  
    let note = getNoteForIteratorPositon(i);
    //let points = note.match(/#/) ?
    //  buildBlackKeySvgPoints() : buildWhiteKeySvgPoints();
    pianoMetadata.push({
      note: getNoteForIteratorPositon(i),
      points: '',
      style: ''
    });
    
    console.log('pushing id', i);
    console.log('piano now ', pianoMetadata);
  }
  
  return pianoMetadata;
}

const startingPoint = 1;
const notesInOctave = 12;

const buildWhiteKeySvgPoints = (start, stop) =>
  `${start},7.5 ${start},82.5 ${stop},82.5 ${stop},7.5`;
const buildBlackKeySvgPoints = (start, stop) =>
  `${start},7.5 ${start},54.5 ${stop},54.5 ${stop},7.5`;
const getNoteForIteratorPositon = position => {
  let pos = position;
  while (pos > 12) {
   pos -= 12;
  }  
  return notes[pos - 1];
};
  

const whiteKeyStyle = {
  fill: '#FFFFFF',
  stroke: '#000000'
};

const blackKeyStyle = {
  stroke: '#000000'
};

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#',
              'g', 'g#', 'a', 'a#', 'b' ];
