import * as React from 'react';
import { connect } from 'react-redux';
import Container from '../components/container';
import Column from '../components/column';

const ogg = require('../assets/samples/piano/a4.ogg');
const wav = require('../assets/samples/piano/a4.wav');

interface IAboutPageProps extends React.Props<any> {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class AboutPage extends React.Component<IAboutPageProps, void> {
  render() {
    return (
      <Container>
        <Column className="col-12">
          <h1>About Us</h1>
          <p>
            Rangle.io is a next-generation HTML5 design and development firm
            dedicated to modern, responsive web and mobile applications.
          </p>
          <audio controls>
            <source src={ogg} type="audio/ogg"></source>
            <source src={wav} type="audio/mpeg"></source>
            Your browser does not support the audio element.
          </audio>
        </Column>
      </Container>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
