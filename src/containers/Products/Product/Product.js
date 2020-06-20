import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Product.module.scss';
import data from '../../../Data/data';

const Product = (props) => (
    data.products.map(product => {
        return <li key={product.name} className={classes.product}>
            <img src={product.image} alt="cute T shirt" />
            <div className={classes.name}>
                <Link to = {'/product/' + product._id} >{product._id + product.name}</Link> </div>
            <div className={classes.brand}>
                {product.brand} 
            </div>
            <div className={classes.price}>${product.price}</div>
            <div className={classes.rating}>{product.rating} Stars & {product.numReviews} Reviews</div>
        </li>
    })
)

export default Product;