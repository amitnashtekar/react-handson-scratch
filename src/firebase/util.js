import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import fireBaseConfig from './config';


//fireBaseConfig.API_KEY = process.env.API_KEY
firebase.initializeApp(fireBaseConfig);
console.log('process.env.MODE',process.env.MODE);
export const fireStore = firebase.firestore();
export const auth = firebase.auth();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt : 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserSnapshot = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const {uid} =  userAuth;
    const userRef = fireStore.doc(`Users/${uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const timeStamp = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                timeStamp,
                ...additionalData
            });
        } catch(err) {

        }
    }
    return userRef;
}



