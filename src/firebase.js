import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDf0f2LXczrvVnnNALNTSGGsL-x0I7IjL8",
    authDomain: "slack-clone-6afb0.firebaseapp.com",
    projectId: "slack-clone-6afb0",
    storageBucket: "slack-clone-6afb0.appspot.com",
    messagingSenderId: "373257385243",
    appId: "1:373257385243:web:8c0138470c5ddd61940fbe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };