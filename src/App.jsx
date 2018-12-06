import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import CreateVideo from './pages/CreateVideo';
import Homepage from './pages/Homepage';

export default () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/create" component={CreateVideo} />

        <Route path="/404" component={() => { window.location = '/404'; }} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
