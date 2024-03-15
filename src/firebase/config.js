import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH3z0K6mhl5eftCs96oCxJGoixl3ug2bE",
  authDomain: "live-chat-8aaaa.firebaseapp.com",
  projectId: "live-chat-8aaaa",
  storageBucket: "live-chat-8aaaa.appspot.com",
  messagingSenderId: "127918978693",
  appId: "1:127918978693:web:adeb6463a51c336b435bec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {db, auth, timestamp}