import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';
import PianoKey from '../components/piano-key';

interface IPianoProps extends React.Props<any> {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#',
              'g', 'g#', 'a', 'a#', 'b', 'c' ]; 

function renderNotes() {
  return notes.map((note) => 
    (<PianoKey play={function() {}} 
               stop={function(){}} 
               key={note}
               note={note}/>));
}

class Piano extends React.Component<IPianoProps, void> {
  render() {
    return (
      <div>
        <h1>Piano</h1>
        {renderNotes()}
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piano);
