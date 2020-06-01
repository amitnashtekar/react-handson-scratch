import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, ...otherProps }) => (
    <div >
        <button
            className= {classes.button}
            {...otherProps}>
            {children}
        </button>
    </div>
)

export default Button;