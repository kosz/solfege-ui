import * as React from 'react';
import * as ReduxForm from 'redux-form';
const assign = require('object-assign');

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

  const style = assign({},
    styles[note.color], 
    note.playing ? styles.playing : {}
  );

  return (<polyline onMouseDown={play} 
            onMouseUp={stop} 
            style={style}
            points={note.svg}/>);

};

const styles = {
  white: {
    fill: '#FFFFFF',
    stroke: '#000000'
  },
  black: {
    stroke: '#000000'
  },
  playing: { 
    fill: 'rgba(109,120,118,1)'
  }
};

export default PianoKey;
