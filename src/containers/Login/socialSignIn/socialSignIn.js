import React from 'react';
import Button from '../../../components/Button/Button';
import {singInWithGoogle} from '../../../firebase/util';
import classes from './socialSignIn.module.scss';

const SocialSignIn = (props) => (
    <div className = "googlebtn">
        <Button onClick = {singInWithGoogle}>Sign In with Google</Button>
    </div>
);

export default SocialSignIn;

