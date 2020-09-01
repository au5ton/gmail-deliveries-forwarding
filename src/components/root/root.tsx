import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blurb from './blurb';
import Header from '../header/header';
const Homepage = React.lazy(() => import('../homepage/homepage'));

import '../../styles/base.scss';
import '../../styles/colors.scss';

export default function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route>
            <Blurb http404 />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
