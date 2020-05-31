import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductDetail.module.scss';
import data from '../../data';

const ProductDetail = (props) => {
    const product = data.products.find(p => p._id === props.match.params.id);
    return (
        <div className="">
            <div className={classes.backlink}>
                <Link to="/">Back to products</Link>
            </div>
            <div className={classes.product}>
                <div className={classes["product-image"]}>
                    <img src={product.image} />
                </div>
                <div className="product-detail">
                    <ul className={classes["product-lists"]}>
                        <li className="product-lists">
                            <h4>product.name</h4>
                        </li>
                        <li>
                            {product.brand}
                        </li>
                        <li className="product-lists">
                            {product.rating} Stars & {product.numReviews} Reviews
                        </li>
                        <li>
                           Price: ${product.price}
                        </li>
                    </ul>

                </div>
                <div className = {classes["product-action"]}>
                    <ul>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className={classes["cart-button"]}>
                                Add To Cart
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default ProductDetail;