import React, { useEffect } from 'react';
import { logout } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function Logout() {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(logout());
    },[dispatch])
  return <Redirect to="/" />;
};
Logout.propTypes = {
  logout: PropTypes.func
};

export default Logout;