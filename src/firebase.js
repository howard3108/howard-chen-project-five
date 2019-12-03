// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
  apiKey: 'AIzaSyBqcc-q4pSkeqJTq7av7WievczFm-nWrNI',
  authDomain: 'project5todolist.firebaseapp.com',
  databaseURL: 'https://project5todolist.firebaseio.com',
  projectId: 'project5todolist',
  storageBucket: 'project5todolist.appspot.com',
  messagingSenderId: '813027294022',
  appId: '1:813027294022:web:518bb92506d2de68318347'
};

firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;
