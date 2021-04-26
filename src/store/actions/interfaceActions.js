import * as actionTypes from './actionTypes';

export const openModal = (id = 101) => dispatch => {
  dispatch({ type: actionTypes.OPEN_MODAL, id })
};

export const closeModal = (id) => dispatch => {
  dispatch({ type: actionTypes.CLOSE_MODAL })
};

export const toggleSideDrawer = () => {
  return {
    type: actionTypes.TOGGLE_SIDEDRAWER,
  };
};