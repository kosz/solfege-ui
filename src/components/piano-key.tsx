import * as React from 'react';
import * as ReduxForm from 'redux-form';

interface IPianoKeyProps extends React.Props<any> {
  note: any;
  style: any;
  svg: any;
  play: () => void;
  stop: () => void;
};

const PianoKey = ({
  note,
  style,
  svg,
  play,
  stop
}: IPianoKeyProps) => (
  <polyline style={style} points={svg}/>
);

const styles = {
  base: {},
};

export default PianoKey;
// <div onMouseDown={play} onMouseUp={stop}>{note}:{playing}</div>
