import React from 'react';
import classes from './Anchor.module.scss';
import {Link} from 'react-router-dom';

const Anchor = ({children, ...otherProps}) => (
    <Link className="linkclass" {...otherProps}>
        {children}
    </Link>
)

export default Anchor;