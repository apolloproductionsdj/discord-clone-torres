import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeg9P5xUZvMTB5NPNnTckLnjHvFaT4DCk",
    authDomain: "discord-clone-47117.firebaseapp.com",
    databaseURL: "https://discord-clone-47117.firebaseio.com",
    projectId: "discord-clone-47117",
    storageBucket: "discord-clone-47117.appspot.com",
    messagingSenderId: "616343788917",
    appId: "1:616343788917:web:3895f88019a827585f073c",
    measurementId: "G-2YPE7ZBMSZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
