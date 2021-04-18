import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { filterProducts } from '../../../store/actions';

import NavigationItem from './NavigationItem';

const navigationItems = ({ filterProducts, isAuth }) => (
  <ul className="nav-list">
    <NavigationItem
      // clicked={() => filterProducts('female')}
      // link="/productlist/female"
      link="/"
      exact
      >Women</NavigationItem>
    <NavigationItem
      // clicked={() => filterProducts('male')}
      // link="/productlist/male"
      link="/"
       exact
      >Men</NavigationItem>
    <NavigationItem 
    link="/" exact
    // link="/contact" exact
    >Contact</NavigationItem>
    <NavigationItem 
    // link="/" exact
    link="/" exact
    >Home</NavigationItem>
    {/* {isAuth ? <NavigationItem link="/orders" exact>Orders</NavigationItem> : null} */}
  </ul>
);

NavigationItem.propTypes = {
  isAuth: PropTypes.bool,
  filterProducts: PropTypes.func
};

const mapStateToProps = ({ auth }) => ({ isAuth: auth.token !== null });

export default navigationItems 
// connect(mapStateToProps, { filterProducts })(navigationItems);