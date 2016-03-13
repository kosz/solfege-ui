import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import Piano from '../components/piano';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="piano" component={ Piano }/>
  </Route>
);
