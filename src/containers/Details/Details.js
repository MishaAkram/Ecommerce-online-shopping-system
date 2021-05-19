import React, { useState } from 'react';
import './Details.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DetailItem from './DetailItem/DetailItem';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { openModal, closeModal } from './../../store/actions/interfaceActions';
import { addToCart, addToWishlist } from './../../store/actions/productActions'
import { PropTypes } from 'prop-types';
function Details() {
  const style={
    margin: 0,
    borderRadius: 0,
    textTransform: "uppercase",
    transition: "all .5s ease",
    backfaceVisibility: "hidden",
    backgroundImage: "none",
    background: "#282828",
    border: "1px solid #282828",
    color: "#fff",
    cursor: "pointer",
    display: "inlineblock",
    fontFamily: "Poppins, Helvetica Neue, Helvetica, Arial, sansserif",
    fontWeight: 700,
    boxSizing: "borderbox",
    fontSize:"14px",
    font: "600 14px/1.35 Montserrat,Helvetica\ Neue,Verdana,Arial,sansserif",
    lineHeight: "2.2rem",
    padding: "14px 17px",
    width: "100%",
    verticalAlign: "top",
    marginBottom: "12px"
  }
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
        closeModal={() => dispatch(closeModal())}>
        <p>You must select size.</p>
        <Button clicked={() => dispatch(closeModal())} btnType="dark">Got it</Button>
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
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="switch_s">S</label>
            <input
              type="radio"
              id="switch_m"
              name="switch_5"
              value="M"
              checked={value === 'M'}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="switch_m">M</label>
            <input
              type="radio"
              id="switch_l"
              name="switch_5"
              value="L"
              checked={value === 'L'}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="switch_l">L</label>
            <input
              type="radio"
              id="switch_xl"
              name="switch_5"
              value="XL"
              checked={value === 'XL'}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="switch_xl">XL</label>
            <input
              type="radio"
              id="switch_xxl"
              name="switch_5"
              value="XXL"
              checked={value === 'XXL'}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="switch_xxl">XXL</label>
          </div>
          <div className="button-wrapper">
               <button  style={style}
               onClick={() => handleAddToCart()}
               disabled={detailProduct.inCart ? true : false}
               >
              {detailProduct.inCart ?
                (<p>In Cart</p>) :
                (<p>Add to Cart</p>)
              }
            </button>
            
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
  modalShowed: PropTypes.bool,
  detailProduct: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  addToCart: PropTypes.func,
  addToWishlist: PropTypes.func
};
export default Details

