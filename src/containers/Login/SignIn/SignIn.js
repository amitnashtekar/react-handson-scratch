import React, { useState, useRef } from 'react';
import classes from './SignIn.module.scss';
import { useForm } from 'react-hook-form';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {auth, handleUserSnapshot} from '../../../firebase/util';
import SocialSignIn from '../socialSignIn/socialSignIn';
import Anchor from '../../../components/Anchor/Anchor';





const SingIn = () => {

    
    
    const {register, handleSubmit, errors, watch} = useForm();
    

    

    const onSubmit = async(data) =>  {
        console.log(data);
        const {email, password} = data;
        try{
          const {user} =  await auth.signInWithEmailAndPassword(email,password);
          
        }catch(e){

        }
    }


    return (
        <div className={classes.SingIn}>
            <h4 className={classes["sign-header"]}>Sign In to SHOPPY!</h4>
            
            <div className="social">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                      
                    <Input name = "email" label = "Email" type="email"
                      refs={register ({required: "You must specify a email"})} errors={errors} />
                      <Input name = "password" errors={errors} label = "Password" type="password"
                      refs={register ({required: "You must specify a password"})} />
                   
                    <Input name="submit" type="submit" value="Sign In" errors={errors}/>
                </form>
                <SocialSignIn />
                <div className = {classes.or} >Or</div>                
                <Anchor to ="/signin/register">create an account</Anchor>
                
            </div>
        </div>
    )
}

export default SingIn;