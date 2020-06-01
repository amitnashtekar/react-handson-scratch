import React from 'react';
import classes from './Login.module.scss';
import SocialSignIn from './socialSignIn/socialSignIn';

const Login = () => {
    const handleSubmit =(event) => {
        event.preventDefault();
    }
    return (
        <div className={classes.login}>
            <h4>Login</h4>
            <div className = "social">
                <form onSubmit = {handleSubmit}>
                    <SocialSignIn />
                </form>
            </div>
        </div>
    )
}

export default Login;