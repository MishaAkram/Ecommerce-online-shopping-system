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
import { purchaseInit } from '../../store/actions';

const slides = [];
slides.push(slideOne, slideTwo, slideThree, slideFour, slideFive);

function HomePage() {
    const purchased = useSelector(state => state.order.purchased)
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(purchaseInit())
        dispatch(closeModal())
    };

    return (
        <div>
            <Modal
                modalType="small"
                showModal={purchased}
                showBackdrop={purchased}
                closeModal={closeModal}>
                <p>Order completed successfully.</p>
                <Button clicked={closeModal} btnType="dark">Got it</Button>
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
            </div>
        </div>
    )
}

HomePage.propTypes = {
    purchased: PropTypes.bool.isRequired,
    purchaseInit: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default HomePage
