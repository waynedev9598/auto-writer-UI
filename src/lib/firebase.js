import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU049RQT5a2VD3Qh_4LHgQbiVuh2dQNDw",
  authDomain: "bookapp-f4d82.firebaseapp.com",
  projectId: "bookapp-f4d82",
  storageBucket: "bookapp-f4d82.appspot.com",
  messagingSenderId: "1066337991490",
  appId: "1:1066337991490:web:d89e35d4392fa27f1666db",
  measurementId: "G-XNYT9NEZJR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
