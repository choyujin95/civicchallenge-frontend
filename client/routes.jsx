import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReactGA from 'react-ga';

import App from './modules/App/App';
import Landing from './modules/Landing/Landing';

// require.ensure Polyfill
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

const getSponsors = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Sponsors/Sponsors').default));
const getAbout = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/About/About').default));
const getProcess = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Process/Process').default));
const getTeam = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Team/Team').default));

const getPlaceholder = (nextState, cb) => require.ensure([], require => cb(null, require('./modules/Placeholder/Placeholder').default));

function onRouteChange(prev, next) {
  ReactGA.pageview(next.location.pathname);
}

export default (
  <Route path="/" component={App} onChange={onRouteChange}>
    <IndexRoute component={Landing} />
    <Route path="/sponsors" getComponent={getSponsors} />
    <Route path="/about" getComponent={getAbout} />
    <Route path="/process" getComponent={getProcess} />
    <Route path="/team" getComponent={getTeam} />

    <Route path="/placeholder" getComponent={getPlaceholder} />
  </Route>
);
