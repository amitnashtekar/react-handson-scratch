import React from 'react';
import classes from './ImageButton.module.scss';

const ImageButton = ({children, ...otherProps}) => {
    return (
        <button className={classes.button} {...otherProps}>{children}</button> 
    )
}

export default ImageButton;