import React, { useState } from 'react';
import './Details.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailItem from './DetailItem/DetailItem';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { openModal, closeModal } from './../../store/actions/interfaceActions';
import { addToCart, addToWishlist } from './../../store/actions/productActions'

function Details() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const modalShowed = useSelector(state => state.interface.modalShowed)
  const detailProduct = useSelector(state => state.products.detailProduct)
  
  const handleAddToCart = () => {
    (value === '') ?
      dispatch(openModal()) :
      dispatch(addToCart(detailProduct.id, value));
  };
  if (!detailProduct) return <Redirect to="/" />

  return (
    <>
      <ScrollToTopOnMount />
      <Modal
        modalType="small"
        showModal={modalShowed}
        showBackdrop={modalShowed}
        closeModal={() =>dispatch(closeModal())}>
        <p>You must select size.</p>
        <Button clicked={() =>dispatch(closeModal())} btnType="dark">Got it</Button>
      </Modal>
      <ul className="details-container">
        <DetailItem>
          <p className="detail-subtitle">Select Size:</p>
          <div className="switch-field">
            <input
              type="radio"
              id="switch_s"
              name="switch_5"
              value="S"
              checked={value === 'S'}
              onChange={(e)=>setValue(e.target.value)}
            />
            <label htmlFor="switch_s">S</label>
            <input
              type="radio"
              id="switch_m"
              name="switch_5"
              value="M"
              checked={value === 'M'}
              onChange={(e)=>setValue(e.target.value)}
            />
            <label htmlFor="switch_m">M</label>
            <input
              type="radio"
              id="switch_l"
              name="switch_5"
              value="L"
              checked={value === 'L'}
              onChange={(e)=>setValue(e.target.value)}
            />
            <label htmlFor="switch_l">L</label>
            <input
              type="radio"
              id="switch_xl"
              name="switch_5"
              value="XL"
              checked={value === 'XL'}
              onChange={(e)=>setValue(e.target.value)}
            />
            <label htmlFor="switch_xl">XL</label>
            <input
              type="radio"
              id="switch_xxl"
              name="switch_5"
              value="XXL"
              checked={value === 'XXL'}
              onChange={(e)=>setValue(e.target.value)}
            />
            <label htmlFor="switch_xxl">XXL</label>
          </div>
          <div className="button-wrapper">
            <Button
              clicked={()=>handleAddToCart()}
              disabled={detailProduct.inCart ? true : false}>
              {detailProduct.inCart ?
                (<p>In Cart</p>) :
                (<p>Add to Cart</p>)
              }
            </Button>
            <Button
              clicked={() => dispatch(addToWishlist(detailProduct.id))}
              disabled={detailProduct.inWishlist ? true : false}>
              {detailProduct.inWishlist ?
                (<p>In Wishlist</p>) :
                (<p>Add to Wishlist</p>)
              }
            </Button>
          </div>
        </DetailItem>
      </ul>
    </>
  )
}

Details.propTypes = {
  modalShowed: PropTypes.bool.isRequired,
  detailProduct: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired
};

export default Details;