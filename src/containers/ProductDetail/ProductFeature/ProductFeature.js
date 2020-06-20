import React, {memo} from 'react';
import Image from '../../../components/Image/Image';
import Button from '../../../components/Button/Button';
import classes from './ProductFeature.module.scss';


const ProductFeature = ({ product, handleColorChange }) => {
    console.log("ProductFeature render");
    return (
        <div className={classes["product-detail"]}>
            <ul className={classes["product-lists"]}>
                <li>
                    <h4>{product.title}</h4>
                </li>
                <li>
                    {product.brand}
                </li>
                <li >
                    {product.rating} Stars & {product.numReviews} Reviews
                        </li>
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
                <li className={classes.colorButton}>

                    {product.colorOptions.map((clrOption, ind) => {
                        return <Image key={ind} src={clrOption.imageUrl} clicked={handleColorChange} argumentForClick={ind}>
                        </Image>
                    })}
                </li>
                <li>
                    <Button cls={classes["cart-button"]}>
                        Add To Cart
                            </Button>
                </li>
            </ul>

        </div>
    )
}
ProductFeature.whyDidYouRender = true

export default memo(ProductFeature);