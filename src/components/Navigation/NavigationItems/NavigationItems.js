import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterProducts } from '../../../store/actions';

import NavigationItem from './NavigationItem';

const style={
  fontWeight: "550",
    fontSize: "1em",
    marginBottom: ".3em"
}
const navigationItems = ({ filterProducts, isAuth }) => (
  <ul className="nav-list">
    <NavigationItem
    style={style}
      clicked={() => filterProducts('female')}
      link="/productlist/female" exact>Women</NavigationItem>
    <NavigationItem 
    clicked={() => filterProducts('male')}
      link="/productlist/male"exact
      style={style}>Accessories</NavigationItem>
    <NavigationItem style={style} link="/contact" exact >Contact</NavigationItem>
    <NavigationItem style={style} link="/" exact>Home</NavigationItem>
    {isAuth ? <NavigationItem style={style} link="/orders" exact>Orders</NavigationItem> : null}
  </ul>
);

NavigationItem.propTypes = {
  isAuth: PropTypes.bool,
  filterProducts: PropTypes.func
};

const mapStateToProps = ({ auth }) => ({ isAuth: auth.token !== null });

export default connect(mapStateToProps, { filterProducts })(navigationItems);