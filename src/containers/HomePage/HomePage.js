import React from 'react'
import './HomePage.scss';
import jewel from '../../assets/category/personalised-jewellery-collections-e-e-jewellery_1024x1024.jpg'
import shoes from '../../assets/category/shoes-main-page-categories-5.jpg'
import stoles from '../../assets/category/stoles1.jfif'
import bracelets from '../../assets/category/bracelets.jfif'
import kurti from '../../assets/category/kurti.jpg'
import bags from '../../assets/category/bags.jpg'
import unstitched from '../../assets/category/unstitched.jpg'
import stitched from '../../assets/category/stitched.jpg'
import stitch from '../../assets/category/stitch.jpg'
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
import './Category'

import Category from './Category';

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
                <div className="nav-links">
                    <div className="columns">
                        <div className="column">
                            <div className="widget">
                            </div>
                            <div className="widget">
                                <div className="cdz-three-banner fastest-ellyana-threebanner">
                                    <Category maincategory="female" category="female" img={stitched} title="Women" />
                                    <Category maincategory="female" category="un-stitched" img={unstitched} title="un-stitched" />
                                    <Category maincategory="female" category="stitched" img={stitch} title="stitched" />
                                    <Category maincategory="female" category="kurtis" img={kurti} title="kurtis" />
                                    <Category maincategory="accessories" category="accessories" img={bags} title="Accessories" />
                                    <Category maincategory="accessories" category="earings" img={jewel} title="earings" />
                                    <Category maincategory="accessories" category="footware" img={shoes} title="footware" />
                                    <Category maincategory="accessories" category="stoles" img={stoles} title="stoles" />
                                    <Category maincategory="accessories" category="bracelets" img={bracelets} title="bracelets" />
                                </div>
                            </div>
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
