import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrmdLaWI9C7IjAZcLnTc39qq9dCjFkPag",
    authDomain: "crwn-clothing-d5c99.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d5c99.firebaseio.com",
    projectId: "crwn-clothing-d5c99",
    storageBucket: "crwn-clothing-d5c99.appspot.com",
    messagingSenderId: "61323139886",
    appId: "1:61323139886:web:d3e51466ecd8ef1d0978bf",
    measurementId: "G-LEN80HG00Z"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    console.log(snapshot);

    if (!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        console.log('create user');

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('here');
            console.log('error creating a user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




