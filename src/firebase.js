import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyCydWKCqYqfVFgKZIEjwZSqtEP006Xez54",
    authDomain: "reels-e891a.firebaseapp.com",
    projectId: "reels-e891a",
    storageBucket: "reels-e891a.appspot.com",
    messagingSenderId: "368634851727",
    appId: "1:368634851727:web:0bd77850746c2c628a9bfa"
  };


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()

const firestone = firebase.firestore();
export const database = {
    users : firestone.collection('users'),
    getTimeStamp : firebase.firestore.FieldValue.getTimeStamp
}
export const storage = firebase.storage()