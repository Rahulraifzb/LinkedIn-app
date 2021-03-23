import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDp7O1-2aqZfqa_I-xK_3kVq36vGjS1t40",
    authDomain: "linkedin-app-8f928.firebaseapp.com",
    projectId: "linkedin-app-8f928",
    storageBucket: "linkedin-app-8f928.appspot.com",
    messagingSenderId: "406786141384",
    appId: "1:406786141384:web:041e19b2213d09d83fc9fd",
    measurementId: "G-P0Z8C5BZKF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db,auth };