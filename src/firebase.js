import firebase from 'firebase';


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDfo69jgGMrLs_MrDDOJfhiMLEn8r4oyJY",
  authDomain: "messenger-faecc.firebaseapp.com",
  projectId: "messenger-faecc",
  storageBucket: "messenger-faecc.appspot.com",
  messagingSenderId: "1025873341332",
  appId: "1:1025873341332:web:56e0202628347a4709bd81",
  measurementId: "G-X6FFRTRVXD"

});

const db=firebaseApp.firestore();

export default db;