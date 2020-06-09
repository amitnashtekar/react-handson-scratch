import React from 'react';
import classes from './Products.scss';
import Product from './Product/Product';
import WithAuth from '../../hoc/WithAuth/WithAuth';


const Products = (props) => {
    
    return (
        <WithAuth>
            <div className={classes.content}>
                <ul className={classes.products}>
                    <Product />
                </ul>
            </div>
        </WithAuth>
    )
}

export default Products;