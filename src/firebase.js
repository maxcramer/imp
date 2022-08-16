import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNg0X94HLKydeWkzQrhPCruki38nstOks",
  authDomain: "insuremypev.firebaseapp.com",
  projectId: "insuremypev",
  storageBucket: "insuremypev.appspot.com",
  messagingSenderId: "1008818436037",
  appId: "1:1008818436037:web:1f5aa261e374a7e9753dac",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.initalizeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
