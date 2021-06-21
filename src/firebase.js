import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO_xoQV76IaWk1D1RKcturblh9dVPvdJA",
    authDomain: "simple-login-3985a.firebaseapp.com",
    projectId: "simple-login-3985a",
    storageBucket: "simple-login-3985a.appspot.com",
    messagingSenderId: "736763974712",
    appId: "1:736763974712:web:992d1fd55233b56a7002cd",
    measurementId: "G-NP0TTVNP0Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };