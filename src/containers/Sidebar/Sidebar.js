import React from 'react';
import classes from './Sidebar.module.scss';

const Sidebar = (props) => {
    console.log(classes)
    let sideBarClasses = [classes["sidebar-container"]];
    if (props.open) {
        sideBarClasses.push(classes.open)
    }

    return (
        <div className={sideBarClasses.join(' ')} >
            <h1>Products to have</h1>
            <button className = {classes.close} onClick = {props.openSideBar}>X</button>
            <ul className={classes.products}>
                <li className={classes.product}>
                    T-shirts
                </li>
                <li className={classes.product}>
                    Pants
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;