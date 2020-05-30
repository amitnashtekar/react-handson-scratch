import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Header.css';

const Header = (props) => {
    return (
        <div className={classes.header}>
            <Link to="/">SHOPYY!</Link>
            <Link to="/">Users</Link> |
            <Link to="/pizza">Pizza</Link>
        </div>
    )
}

export default Header;