import React, { useCallback, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductDetail.module.scss';
import data from '../../Data/product_detail.js';
import ProductView from './ProductView/ProductView';
import ProductFeature from './ProductFeature/ProductFeature';


const ProductDetail = (props) => {
    const product =
         data.ProductData.find(p => p._productId === props.match.params.id)
    
    const [selectedColor, setColor] = useState(product.colorOptions[0]);
    
    const handleColorChange = useCallback((colorIndex) => {

        console.log(colorIndex);
        setColor(selectedColor => selectedColor = product.colorOptions[colorIndex]);
    }, [product, setColor])
    return (
        <div className="">
            <div className={classes.backlink}>
                <Link to="/">Back to products</Link>
            </div>
            <div className={classes.product}>
                <ProductView src={selectedColor.imageUrl} />

                <ProductFeature product={product} handleColorChange={handleColorChange} />

            </div>
        </div>
    )
};


export default ProductDetail; 