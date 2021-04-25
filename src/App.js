import React, { Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
// import asyncComponent from './hoc/asyncComponent';
import HomePage from './containers/HomePage/HomePage';
import ProductList from './containers/ProductList/ProductList';
import Layout from './layout/Layout';


function App() {
  return (
    <div>
      <Fragment>
      <Layout>

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/productlist/:type" component={ProductList} />
          <Redirect to="/" />
        </Switch>
        </Layout>
      </Fragment>
    </div>

  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default App;
