import HomePage from '../HomePage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const ContentArea = () => (
  <Switch>
    <Route exact path={'/'} component={HomePage} />
  </Switch>
);

export default ContentArea;
