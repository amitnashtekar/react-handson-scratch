import React, { useState, useRef } from 'react';
import classes from './SignUp.module.scss';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import {auth, handleUserSnapshot} from '../../../firebase/util';
import Anchor from '../../../components/Anchor/Anchor';



const SignUp = () => {

    const [signUp, setSignUp] = useState({
        displayName: '',
        email: '',
        password: '',
        timeStamp: null
    });
    const password = useRef({});
    const {register, handleSubmit, errors, watch} = useForm();
    password.current = watch("password");

    

    const onSubmit = async(data) =>  {
        console.log(data);
        const {email, password, displayName} = data;
        try{
          const {user} =  await auth.createUserWithEmailAndPassword(email, password);
          await handleUserSnapshot(user, displayName);
        }catch(e){

        }
    }


    return (
        <div className={classes.SignUp}>
            <h4>Sign Up</h4>
            <div className="social">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                      <Input name = "displayName" label = "Display Name" type="text"
                      refs={register ({required: "You must specify a displayName"})} errors={errors} />
                    <Input name = "email" label = "Email" type="email"
                      refs={register ({required: "You must specify a email"})} errors={errors} />
                      <Input name = "password" errors={errors} label = "Password" type="password"
                      refs={register ({required: "You must specify a password"})} />
                    <Input name = "repassword" errors={errors} label = " Re-enter Password" type="password"
                      refs={register ({required: "You must specify a password", validate: value => value === password.current || 'password donest match!'})} />
                    <Input name="submit" type="submit" value="Sign Up" errors={errors}/>
                </form>
                <div className={classes.or} >Or</div>
                <Anchor to ="/signin/login">Go to Login</Anchor>
                
            </div>
        </div>
    )
}

export default SignUp;