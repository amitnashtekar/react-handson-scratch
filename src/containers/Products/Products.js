import React from 'react';
import classes from './Products.scss';
import TshirtCute from '../../assets/images/5Years-t-shirt/cute.jpg';

const Products = (props) => {
    console.log(classes)
    return (
        <div className = {classes.content}>
            <ul className = {classes.products}>
                <li className = {classes.product}>
                    <img src = {TshirtCute} alt="cute T shirt" />
                    <div className = {classes.name}>
                        <a href="#">Cute 2</a> </div>
                    <div className = {classes.brand}>
                       
                        Puma </div>
                    <div className = {classes.price}>$40 </div>
                    <div className = {classes.rating}>4.5 Stars </div>
                </li>
                <li className = {classes.product}>
                    <img src = {TshirtCute} alt="cute T shirt" />
                    <div className = {classes.name}>
                        <a href="#">Cute 2</a> </div>
                    <div className = {classes.brand}>Puma </div>
                    <div className = {classes.price}>$40 </div>
                    <div className = {classes.rating}>4.5 Stars </div>

                </li>
                <li className = {classes.product}>
                    <img src = {TshirtCute} alt="cute T shirt" />
                    <div className = {classes.name}>
                        <a href="#">Cute 2</a> </div>
                    <div className = {classes.brand}>Puma </div>
                    <div className = {classes.price}>$40 </div>
                    <div className = {classes.rating}>4.5 Stars </div>

                </li>
                <li className = {classes.product}>
                    <img src = {TshirtCute} alt="cute T shirt" />
                    <div className = {classes.name}>
                        <a href="#">Cute 2</a> </div>
                    <div className = {classes.brand}>Puma </div>
                    <div className = {classes.price}>$40 </div>
                    <div className = {classes.rating}>4.5 Stars </div>

                </li>
                <li className = {classes.product}>
                    <img src = {TshirtCute} alt="cute T shirt" />
                    <div className = {classes.name}>
                        <a href="#">Cute 2</a> </div>
                    <div className = {classes.brand}>Puma </div>
                    <div className = {classes.price}>$40 </div>
                    <div className = {classes.rating}>4.5 Stars </div>

                </li>
            </ul>
        </div>
    )
}

export default Products;