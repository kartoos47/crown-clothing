import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWIpDv5rs8z7-1WGaoAs6rt70uuvWOWGI",
  authDomain: "crown-db-4e46f.firebaseapp.com",
  databaseURL: "https://crown-db-4e46f.firebaseio.com",
  projectId: "crown-db-4e46f",
  storageBucket: "crown-db-4e46f.appspot.com",
  messagingSenderId: "438395362582",
  appId: "1:438395362582:web:d9b3e13256c04fe8108437",
  measurementId: "G-EF5EN7EVMX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
