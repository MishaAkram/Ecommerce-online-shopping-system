import * as actionTypes from './actionTypes';

export const filterProducts = category => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    category
  }
};

export const addToCart = (id, size) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
    size
  }
};

export const addToWishlist = id => {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    id
  }
};

export const sortProducts = (priceKey, idKey) => dispatch => {
  dispatch({
    type: actionTypes.SORT_PRODUCTS,
    priceKey,
    idKey
  })
};

export const handleDirection = () => dispatch => {
  dispatch({
    type: actionTypes.HANDLE_DIRECTION
  })
};

export const handleCheckboxValue = value => dispatch => {
  dispatch({
    type: actionTypes.HANDLE_CHECKBOX_VALUE,
    value
  })
}

export const showDetails = (id) => dispatch => {
  dispatch({
    type: actionTypes.SHOW_DETAILS,
    id
  })

};

export const calculateOrder = () => dispatch => {
  dispatch({ type: actionTypes.CALCULATE_ORDER })
};

export const removeCartItem = id => dispatch=> {
  dispatch({
    type: actionTypes.REMOVE_CART_ITEM,
    id
  })
};

export const handleProductAmount = (id, value) => dispatch => {
  dispatch({
    type: actionTypes.HANDLE_PRODUCT_AMOUNT,
    id,
    value
  })
};

export const clearCart = () => dispatch => {
  dispatch({
   type: actionTypes.CLEAR_CART
  })
};

export const removeWishlistItem = id => {
  return {
    type: actionTypes.REMOVE_WISHLIST_ITEM,
    id
  }
};

export const clearWishlist = () => {
  return {
    type: actionTypes.CLEAR_WISHLIST
  }
};