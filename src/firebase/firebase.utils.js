import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-OPmQ_f0loG0GIFmpF8cXvLEbtaf2II4",
    authDomain: "atf-store.firebaseapp.com",
    databaseURL: "https://atf-store.firebaseio.com",
    projectId: "atf-store",
    storageBucket: "atf-store.appspot.com",
    messagingSenderId: "117736332692",
    appId: "1:117736332692:web:97dccf5faa5d0ffef14381",
    measurementId: "G-TWP8G630ZR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;