import React, { } from 'react';
import './DetailItem.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Modal from './../../../components/UI/Modal/Modal';
import Button from './../../../components/UI/Button/Button';
import { closeModal, openModal} from '../../../store/actions';
import { showDetails } from './../../../store/actions/productActions';

const thumb2 = {
  display: 'inline-flex',
  borderRadius: 0,
  border: '3px solid #eaeaea',
  marginBottom: 2,
  marginRight: 2,
  width: 345,
  height: 500,
  padding: 5,
  boxSizing: 'border-box'
};
function DetailItem({ children, id,showModal }) {
  const modalShowed = useSelector(state => state.interface.modalShowed)
  const detailProduct = useSelector(state => state.products.detailProduct)
  const dispatch = useDispatch()
  if (detailProduct === null) return <Redirect to="/" />;
  const { title, subtitle, img, description, price, category, gender, code, previousPrice } = detailProduct;
  const showDetailsByModal = () => {
    dispatch(showDetails(id))
    dispatch(closeModal())
  }
  return (
    <div>
      <Modal
        showModal={modalShowed}
        showBackdrop={modalShowed}
        closeModal={() => dispatch(closeModal())}>
        <button onClick={() => dispatch(closeModal())} className="close-modal-btn">x</button>
        <h3 className="main-title">{title}</h3>
        <img src={img} alt="" />
        <h3 className="modal-title">Info:</h3>
        <p className="modal-subtitle">{subtitle}</p>
        <h3 className="modal-title">Price: {price}.00 $</h3>
        <h3 className="modal-title">Sizes: S, M, L, XL, XXL</h3>
        <div className="btn-wrapper">
          <Link to={`/details/${id}`}>
            <Button clicked={() => showDetailsByModal()}>Show Details</Button>
          </Link>
        </div>
      </Modal>
      <li className="detail-item">
        <p className="detail-value">{subtitle}</p>
        <div className="detail-content">
          <div className="detail-img-wrapper">
            <img src={img} alt="" className="detail-item-img" style={thumb2}
              onClick={(id) => dispatch(showModal(id))}
            />
          </div>
          <div className="detail-info">
            <h3 className="detail-title">{title}</h3>
            <h2 className="text-uppercase font-weight-bold"
              style={{ fontFamily: "ACourier New, monospace" }}
            >{description}</h2>
            <h3 style={{ fontFamily: "ACourier New, monospace" }}>Description:</h3>
            <h6 style={{ fontSize: "12px" }}>{code}</h6>
            <h3 style={{ fontFamily: "ACourier New, monospace" }}>{category}</h3>
            <h3 className="detail-subtitle">{gender}</h3>
            <h3 style={{ fontFamily: "ACourier New, monospace" }} >PKR {price} <strike style={{ color: "red" }}>{" "}{previousPrice}{" "}</strike></h3>
            <Divider />
            {children}
          </div>
        </div>
      </li>
    </div>
  )
};

DetailItem.propTypes = {
  detailProduct: PropTypes.object
};

export default DetailItem;