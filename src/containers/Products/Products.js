import React from 'react';
import classes from './Products.scss';
import Product from './Product/Product';


const Products = (props) => {
    
    return (
        <div className={classes.content}>
            <ul className={classes.products}>
                <Product />
            </ul>
        </div>
    )
}

export default Products;