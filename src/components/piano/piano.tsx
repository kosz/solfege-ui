import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../../components/container';
import PianoKey from '../../components/piano/piano-key';
import { play, stop } from '../../actions/piano';
const R = require('ramda');

interface IPianoProps extends React.Props<any> {
  piano: any;
  playNote: (key) => any;
  stopNote: (key) => any;
};

function mapStateToProps(state) {
  return {
    piano: state.piano.get('piano')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playNote: (key) => () => dispatch(play(key)),
    stopNote: (key) => () => dispatch(stop(key)),
  };
}

class Piano extends React.Component<IPianoProps, void> {

  render() {
    
    const { piano, playNote, stopNote } = this.props;

    return (
      <div className="mt4">  
      <svg 
           version="1.1"
           id="Layer_1"
           viewBox="0 0 500 500"
           x="0px"
           y="0px">
        {piano.toArray().map((note) =>
            (<PianoKey play={playNote(note.note)}
                       stop={stopNote(note.note)}
                       key={note.note}
                       note={note}/>))}
      </svg>
      </div>
      );
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piano);
