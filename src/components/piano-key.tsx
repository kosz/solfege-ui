import * as React from 'react';
import * as ReduxForm from 'redux-form';

interface IPianoKeyProps extends React.Props<any> {
  note?: string;
  playing: any;
  play: () => void;
  stop: () => void;
};

const PianoKey = ({
  note = 'c',
  playing,
  play,
  stop
}: IPianoKeyProps) => (
    <div onMouseDown={play} onMouseUp={stop}>{note}:{playing}</div>
);

const styles = {
  base: {},
};

export default PianoKey;
