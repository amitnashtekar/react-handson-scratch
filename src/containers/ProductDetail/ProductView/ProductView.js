import React from 'react';
import Classes from './ProductView.module.scss';

const ProductView = (props) => {
    console.log("ProductView render");
    return(
    <div className={Classes["product-image"]}>
        <img {...props} />
    </div>
)}

export default ProductView;