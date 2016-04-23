import * as React from 'react';
import sounds from './piano-sounds.store.ts';
const R = require('ramda');

interface IPianoKeyProps extends React.Props<any> {
};

const PianoSounds = ({
}: IPianoKeyProps) => {

  console.log('soundsUrl', sounds);
  return (
    <div>
    {R.keys(sounds).map((note) =>
      (<audio key={note} id={note}>
        <source src={sounds[note].ogg} type="audio/ogg"></source>
        <source src={sounds[note].wav} type="audio/mpeg"></source>
      </audio>))}
    </div>
  );

};

export default PianoSounds;

