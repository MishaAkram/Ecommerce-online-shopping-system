import HomePage from "./containers/HomePage/HomePage";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import React, { Fragment } from 'react';

function App() {
  return (
    <div>
      <Fragment>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    </div>

  );
}

export default App;
