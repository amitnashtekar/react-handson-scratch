import React from 'react';
import classes from './Input.module.scss';
import _ from 'lodash';

const Input = ({ label, refs, errors, ...otherProps }) => {
    let namekey = otherProps["name"];
    const message = _.get(errors, `${namekey}.message`);


    return (
        <div className={classes.input}>
            {label && <div>{label}</div>}
            <input {...otherProps} ref={refs} />
            {
                message && <p>{message}</p>
            }
        </div>

    )
}

export default Input;