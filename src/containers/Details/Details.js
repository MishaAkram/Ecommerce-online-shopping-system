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
import Card from '@material-ui/core/Card';
import Select from 'react-select'

function Details(props) {
  const style = {
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
    fontSize: "14px",
    font: "600 14px/1.35 Montserrat,Helvetica Neue,Verdana,Arial,sansserif",
    lineHeight: "2.2rem",
    padding: "14px 17px",
    width: "100%",
    verticalAlign: "top",
    marginBottom: "12px"
  }
  const textStyle = { fontFamily: "ACourier New, monospace" }

  const [value, setValue] = useState('')
  const dispatch = useDispatch();
  const modalShowed = useSelector(state => state.interface.modalShowed)
  const detailProduct = useSelector(state => state.products.detailProduct)
  console.log(detailProduct)
  const data = props.location.data

  const handleAddToCart = () => {
    (detailProduct.category !== 'un-stitched' && detailProduct.category !== "earings" &&
      detailProduct.category !== "stoles" && detailProduct.category !== "bracelets") ? (value === '') ?
      dispatch(openModal()) :
      dispatch(addToCart(detailProduct.id, value)) : dispatch(addToCart(detailProduct.id, value))
  };
  if (!detailProduct) return <Redirect to="/" />

  return (
    <div style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <ScrollToTopOnMount />
      <Modal
        modalType="small"
        showModal={modalShowed}
        showBackdrop={modalShowed}
        closeModal={() => dispatch(closeModal())}>
        <p style={textStyle}>You must select size.</p>
        <Button clicked={() => dispatch(closeModal())} btnType="dark" style={textStyle} >Got it</Button>
      </Modal>
      <ul className="details-container">
        <Card>
          <DetailItem data={data}>
            {((detailProduct.category !== 'un-stitched' &&
              detailProduct.maincategory === "female") ||
              (detailProduct.maincategory === "accessories"
                && detailProduct.category !== "earings" &&
                detailProduct.category !== "stoles" &&
                detailProduct.category !== "bracelets")) &&
              <>
                <p className="detail-subtitle" style={textStyle}>Select Size:</p>
                <br />
                <div className="col-sm-4">

                  <Select
                    options={detailProduct.maincategory === "female" ? option1 : option2}
                    onChange={(e) => setValue(e.value)}
                    defaultValue={value.value}
                    placeholder="Please select size" />
                </div>
                <br />
              </>
            }
            <div className="button-wrapper">
              <button style={style}
                onClick={() => handleAddToCart()}
                disabled={detailProduct.inCart ? true : false}>
                {detailProduct.inCart ?
                  (<p style={{ fontFamily: "ACourier New, monospace", fontSize: 20, fontWeight: 600 }}>In Cart</p>) :
                  (<p style={{ fontFamily: "ACourier New, monospace", fontSize: 20, fontWeight: 600 }}>Add to Cart</p>)
                }
              </button>

              <Button
                clicked={() => dispatch(addToWishlist(detailProduct.id))}
                disabled={detailProduct.inWishlist ? true : false}>
                {detailProduct.inWishlist ?
                  (<p style={{ fontFamily: "ACourier New, monospace", fontSize: 14, fontWeight: 200 }}>In Wishlist</p>) :
                  (<p style={{ fontFamily: "ACourier New, monospace", fontSize: 14, fontWeight: 200 }}>Add to Wishlist</p>)
                }
              </Button>
            </div>
          </DetailItem>
        </Card>
      </ul>
    </div>
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

const option2 = [
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
]
const option1 = [
  { value: 'S', label: "S" },
  { value: 'M', label: "M" },
  { value: 'L', label: "L" },
  { value: 'XL', label: "XL" },
  { value: 'XXl', label: "XXL" },
]