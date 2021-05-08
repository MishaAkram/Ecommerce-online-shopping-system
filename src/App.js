import React, { Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asyncComponent from './hoc/asyncComponent';
import HomePage from './containers/HomePage/HomePage';
import ProductList from './containers/ProductList/ProductList';
import Layout from './layout/Layout';
import Cart from './containers/Cart/Cart';
import Details from './containers/Details/Details';
// import Wishlist from './containers/Wishlist/Wishlist';
import Contact from './containers/Contact/Contact';
import Logout from './containers/Auth/Logout/Logout';

function App() {
  const isAuth = useSelector(state => state.auth.token !== null)
  const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
  });
  const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
  });
  return (
    <div>
      <Fragment>
        <Layout>
          <Switch>
            {!isAuth && <Route path="/auth" component={asyncAuth} />}
            {isAuth && <Route path="/orders" component={asyncOrders} />}
            {isAuth && <Route path="/logout" component={Logout} />}
            {/* <Route path="/wishlist" component={Wishlist} /> */}
            <Route path="/" exact component={HomePage} />
            <Route path="/contact" component={Contact} />
            <Route path="/productlist/:type" component={ProductList} />
            <Route path="/details/:id" component={Details} />
            <Route path="/cart" component={Cart} />

            <Redirect to="/" />
          </Switch>
        </Layout>
      </Fragment>
    </div>

  );
}


// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };

export default withRouter(App);
// export default App;
