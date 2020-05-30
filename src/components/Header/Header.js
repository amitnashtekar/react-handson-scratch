import React from 'react';
import { Link, Route } from 'react-router-dom';
import classes from './Header.scss';

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.brand}><Link to="/">SHOPYY !</Link></div>
            <div>
                <Link to="/">Users</Link>
                <Link to="/pizza">Pizza</Link>
            </div>

        </div>
    )
}

export default Header;