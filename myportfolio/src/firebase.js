import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8n3hYUZsGdtXFH17Uz99Vby1TVTI35V8",
  authDomain: "myportfolio-react-efa82.firebaseapp.com",
  projectId: "myportfolio-react-efa82",
  storageBucket: "myportfolio-react-efa82.appspot.com",
  messagingSenderId: "942225119340",
  appId: "1:942225119340:web:0d622c2d7fbff18a752049",
});

var db = firebaseApp.firestore();

export { db };
