import * as React from 'react';
import * as ReduxForm from 'redux-form';

const R = require('ramda');

interface IPianoKeyProps extends React.Props<any> {
  note: any;
  play: () => void;
  stop: () => void;
};

const PianoKey = ({
  note,
  play,
  stop
}: IPianoKeyProps) => {

  const style = note.playing ? 
    R.merge(note.style, { fill: 'rgba(109,120,118,1)' }) :
    note.style;
  return (<polyline onMouseDown={play} 
            onMouseUp={stop} 
            style={style}
            points={note.svg}/>);

};

const styles = {
  base: {},
};

export default PianoKey;
