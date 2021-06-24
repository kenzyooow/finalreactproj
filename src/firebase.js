import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBeVSk1YRnxeohgkwn1N5HrWGibeh-nqXw",
    authDomain: "final-project-6351d.firebaseapp.com",
    projectId: "final-project-6351d",
    storageBucket: "final-project-6351d.appspot.com",
    messagingSenderId: "102301231038",
    appId: "1:102301231038:web:b4263ad350f7725090bbef"
});

const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};