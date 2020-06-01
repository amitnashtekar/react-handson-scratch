import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import fireBaseConfig from './config';

firebase.initializeApp(fireBaseConfig);

export const fireStore = firebase.firestore();
export const auth = firebase.auth();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt : 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(GoogleProvider);



