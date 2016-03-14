import * as React from 'react';
import * as ReduxForm from 'redux-form';

interface IPianoKeyProps extends React.Props<any> {
  note?: string;
  play: () => void;
  stop: () => void;
};

const PianoKey = ({
  note = 'c',
  play,
  stop
}: IPianoKeyProps) => (
    <div onMouseDown={play} onMouseUp={stop}>{note}</div>
);

const styles = {
  base: {},
};

export default PianoKey;
