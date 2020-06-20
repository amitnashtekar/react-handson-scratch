import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, cls,  ...otherProps }) => (
    
    <div >
        <button
            className= {[classes.button, cls].join(' ')}
            {...otherProps}>
            {children}
        </button>
    </div>
)

export default Button;