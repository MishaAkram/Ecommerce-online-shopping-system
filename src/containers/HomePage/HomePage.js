import React from 'react'
import './HomePage.scss';
import saleBg from '../../assets/home_page/img4.jpg';
import slideOne from '../../assets/home_page/slide_1.jpg';
import slideTwo from '../../assets/home_page/slide_2.jpg';
import slideThree from '../../assets/home_page/slide_3.jpg';
import slideFour from '../../assets/home_page/slide_4.jpg';
import slideFive from '../../assets/home_page/slide_5.jpg';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import PropTypes from 'prop-types';
import { closeModal, purchaseInit } from '../../store/actions';
import pic1 from "./104.jpg"
import pic2 from "./accessories.jpg"

import { filterProducts } from './../../store/actions/productActions';
import NavigationItem from './../../components/Navigation/NavigationItems/NavigationItem';
const thumb2 = {
    display: 'inline-flex',
    borderRadius: 0,
    border: '3px solid #eaeaea',
    marginBottom: 2,
    marginRight: 2,
    width: 425,
    height: 600,
    padding: 5,
    boxSizing: 'border-box'
};
const thumb1 = {
    display: 'inline-flex',
    borderRadius: 0,
    marginBottom: 2,
    marginRight: 2,
    width: 425,
    height: 600,
    padding: 5,
    boxSizing: 'border-box'
};
const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);
function HomePage() {
    const purchased = useSelector(state => state.order.purchased)
    const dispatch = useDispatch();
    const closeModale = () => {
        dispatch(purchaseInit())
        dispatch(closeModal())
    };
    return (
        <div>
            <Modal
                modalType="small"
                showModal={purchased}
                showBackdrop={purchased}
                closeModal={closeModale}>
                <p>Order completed successfully.</p>
                <Button clicked={closeModale} btnType="dark">Got it</Button>
            </Modal>
            <div className="home-container">
                <div className="showcase">
                </div>
                <div style={{ backgroundImage: `url(${saleBg})` }} className="sale">
                </div>
                <div className="slider">
                    {slides.map(slide => (
                        <div key={slide} style={{ backgroundImage: `url('${slide}')` }} className="slide">
                        </div>
                    ))}
                </div>
                <br />
                <div className="col">
                    <div className="row">
                        <div style={thumb1}>
                            <NavigationItem
                                clicked={() => dispatch(filterProducts('female'))}
                                link="/products/female" exact>
                                <img src={pic1} style={thumb2} alt="women" />
                            </NavigationItem>
                        </div>
                        <div style={thumb1}>
                            <NavigationItem
                                clicked={() => dispatch(filterProducts('accessories'))}
                                link="/products/accessories" exact>
                                <img src={pic2} style={thumb2} alt="accessories" />
                            </NavigationItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HomePage.propTypes = {
    purchased: PropTypes.bool,
    purchaseInit: PropTypes.func,
    closeModal: PropTypes.func
};

export default HomePage
