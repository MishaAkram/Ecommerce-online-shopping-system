import React from 'react'
import { Link } from 'react-router-dom';
import './HomePage.scss'
import { useDispatch } from 'react-redux';
import { filterProducts } from './../../store/actions/productActions';

const text = {
    fontSize: "15px",
    fontWeight: 500
}
const Category = ({ img, link, title, maincategory, category }) => {
    const dispatch = useDispatch();
    return (
        <div className="col-sm-8 y">
            <div className="groupbanner-text hoverScale i ">
                <Link
                    onClick={() => dispatch(filterProducts(category))}
                    to={`/products/${maincategory}`}
                    style={text}>
                    <img src={img} alt={title} width="585" />
                </Link>
                <div className="group-info x">
                    <div className="groupinfo-inner s">
                        <div className="groupinfo-desc textCenter q">
                            <p className="grifo-title textUppercase m">{title}</p>
                            <p className="grifo-desc n">
                                <Link
                                    onClick={() => dispatch(filterProducts(category))}
                                    to={`/products/${maincategory}`}
                                    style={text}>
                                    Shop Now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Category
