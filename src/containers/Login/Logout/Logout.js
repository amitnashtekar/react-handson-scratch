import React from 'react';
import {auth} from '../../../firebase/util';
import classes from './Logout.module.scss';

const Logout = (props) => (
    <div className = {classes.logout} onClick = {() =>auth.signOut()}>
        Logout
    </div>
)

export default Logout;