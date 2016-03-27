import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';
import PianoKey from '../components/piano-key';
import { play, stop } from '../actions/piano';

interface IPianoProps extends React.Props<any> {
  piano: any;
  playNote: (key) => any;
  stopNote: (key) => any;
};

function mapStateToProps(state) {
  console.log('getting piano');
  return {
    piano: state.piano
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playNote: (key) => () => dispatch(play(key)),
    stopNote: (key) => () => dispatch(stop(key)),
  };
}

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#',
              'g', 'g#', 'a', 'a#', 'b' ]; 

const whiteKeyStyle = {
  fill: '#FFFFFF',
  stroke: '#000000',
  strokeMiterlimit: 10
};

const blackKeyStyle = {
  stroke: '#000000',
  strokeMiterlimit: 10
};

const svgStyle = {
  enableBackground: 'new 0 0 500 250'
};

class Piano extends React.Component<IPianoProps, void> {

  render() {
    
    const { piano, playNote, stopNote } = this.props;

    console.log('piano >', piano);

    return (
      <div>
        <h1>Piano</h1>
        {notes.map((note) =>
            (<PianoKey play={playNote(note)}
                       stop={stopNote(note)}
                       playing={piano.has('c')}
                       key={note}
                       note={note}/>))}
                       
      <svg version="1.1" id="Layer_1" x="0px" y="0px"
width="500px" height="250px" viewBox="0 0 500 250" style={ svgStyle }>
<polyline style={whiteKeyStyle} points="14,7.5 14,82.5 46,82.5 46,7.5 "/>
<polyline style={whiteKeyStyle} points="50,7.5 50,82.5 82,82.5 82,7.5 "/>
<polyline style={whiteKeyStyle} points="86,7.5 86,82.5 118,82.5 118,7.5 "/>
<polyline style={whiteKeyStyle} points="122,7.5 122,82.5 154,82.5 154,7.5 "/>
<polyline style={whiteKeyStyle} points="157,7.5 157,82.5 189,82.5 189,7.5 "/>
<polyline style={whiteKeyStyle} points="193,7.5 193,82.5 225,82.5 225,7.5 "/>
<polyline style={whiteKeyStyle} points="229,7.5 229,82.5 261,82.5 261,7.5 "/>
<polyline style={whiteKeyStyle} points="265,7.5 265,82.5 297,82.5 297,7.5 "/>
<polyline style={blackKeyStyle} points="37,7.5 37,54.5 59,54.5 59,7.5 "/>
<polyline style={blackKeyStyle} points="73,7.5 73,54.5 95,54.5 95,7.5 "/>
<polyline style={blackKeyStyle}
    points="145.5,7.5 145.5,54.5 167.5,54.5 167.5,7.5 "/>
<polyline style={blackKeyStyle}
    points="181.5,7.5 181.5,54.5 203.5,54.5 203.5,7.5 "/>
<polyline style={blackKeyStyle}
    points="218.5,7.5 218.5,54.5 240.5,54.5 240.5,7.5 "/>
</svg>
        </div>
       
        );
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piano);
