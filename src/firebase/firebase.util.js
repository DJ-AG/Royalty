import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoDbnzjzp4UqAU-ax04JWDSq83sD7762Q",
  authDomain: "crwn-db-d8ffb.firebaseapp.com",
  databaseURL: "https://crwn-db-d8ffb.firebaseio.com",
  projectId: "crwn-db-d8ffb",
  storageBucket: "crwn-db-d8ffb.appspot.com",
  messagingSenderId: "892246952387",
  appId: "1:892246952387:web:add6ae49964c3d09c69576",
  measurementId: "G-THHS1J6S0M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;