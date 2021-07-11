import React from 'react';
import './ProductList.scss';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SideNavigation from '../../components/Navigation/NavigationItems/SideNavigation';
import Product from './Product/Product';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';
import { closeModal, handleCheckboxValue, handleDirection, sortProducts, openModal, showDetails } from '../../store/actions';
const textStyle = { fontFamily: "ACourier New, monospace" }

function ProductList() {
  const products = useSelector(state => state.products.products)
  const modalShowed = useSelector(state => state.interface.modalShowed)
  const modalProduct = useSelector(state => state.interface.modalProduct)
  const checkboxValue = useSelector(state => state.products.sortCheckboxValue)
  const { title, img, subtitle, price, id, maincategory } = modalProduct;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleCheckboxValue(e.target.value))
    dispatch(handleDirection())
    dispatch(sortProducts('price', 'id'))
  };

  const showDetailsByModal = () => {
    dispatch(showDetails(id))
    dispatch(closeModal())
  }
  if (!products || products.length === 0) {
    return <Redirect to="/" />
  };

  return (
    <>
      <ScrollToTopOnMount />
      <div className="product-container">
        <Modal
          showModal={modalShowed}
          showBackdrop={modalShowed}
          closeModal={() => dispatch(closeModal())}>
          <button onClick={() => dispatch(closeModal())} className="close-modal-btn">x</button>
          <h3 className="main-title" style={textStyle}>{title}</h3>
          <img src={img} alt="" />
          <h3 className="modal-title" style={textStyle}>Info:</h3>
          <p className="modal-subtitle" style={textStyle}>{subtitle}</p>
          <h3 className="modal-title" style={textStyle}>Price: PKR {price}.00</h3>
          {maincategory == "female" && <h3 className="modal-title" style={textStyle}>Sizes: S, M, L, XL, XXL</h3>}
          <div className="btn-wrapper">
            <Link to={`/details/${id}`}>
              <Button clicked={() => showDetailsByModal()}>Show Details</Button>
            </Link>
          </div>
        </Modal>
        <div className="filter-panel">
          Sort by:
          <select onChange={(e) => handleChange(e)} value={checkboxValue}>
            <option value="relevance" style={textStyle}>Relevance</option>
            <option value="price - low to high" style={textStyle}>Price - low to high</option>
            <option value="price - high to low" style={textStyle}>Price - high to low</option>
          </select>
          <p className="products-amount" style={textStyle}>Products amount: <span className="amount">{products.length}</span></p>
        </div>
        <div className="product-list-wrapper">
          <div className="navigation">
            <SideNavigation />
          </div>
          <ul className="product-list">
            {products.map((product, index) => {
              return (
                <Product
                  key={index}
                  product={product}
                  showModal={(id) => dispatch(openModal(id))}
                  showDetails={(id) => dispatch(showDetails(id))}
                />)
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
ProductList.propTypes = {
  products: PropTypes.array,
  modalShowed: PropTypes.bool,
  modalProduct: PropTypes.object,
  checkboxValue: PropTypes.string,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  sortProducts: PropTypes.func,
  handleDirection: PropTypes.func,
  handleCheckboxValue: PropTypes.func,
  showDetails: PropTypes.func,
};
export default ProductList;