 //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
//import 'firebase/compat/auth';
import  'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBflplVYhuL6HICW7ODtp0mMtCzGA4fwF0",
  authDomain: "gallerydrive-339ec.firebaseapp.com",
  projectId: "gallerydrive-339ec",
  storageBucket: "gallerydrive-339ec.appspot.com",
  messagingSenderId: "540975156210",
  appId: "1:540975156210:web:cceab396178001a836b96b",
  measurementId: "G-9GVXRJX5TX"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
//console.log(projectStorage);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);