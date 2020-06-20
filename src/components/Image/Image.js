import React from 'react';
import classes from './Image.module.scss';

const Image = (props) => {
    const { children, cls,clicked,argumentForClick,  ...otherProps } = props;
    const handleClick = () =>{
        clicked(argumentForClick)
    }
    return (
    
    <div >
        <img
            onClick = {handleClick} 
            className= {[classes.Image, cls].join(' ')}
            {...otherProps}>
            {children || null}
        </img>
    </div>
)}

export default Image;