import React, { useState, useRef } from 'react';
import classes from './Login.module.scss';
import SignUp from './SignUp/SingUp';
import SocialSignIn from './socialSignIn/socialSignIn';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {auth, handleUserSnapshot} from '../../firebase/util';
import SingIn from './SignIn/SignIn';



const Login = ({match:{params},...otherProps}) => {

   const SignInUp = params.type === "login" ? <SingIn /> : <SignUp />

    return (
        <div className={classes.login}>
           {SignInUp}         
        </div>
    )
}

export default Login;