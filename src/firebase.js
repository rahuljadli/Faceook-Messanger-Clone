import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyATHMS3u2m29pZaceedjxqbZ63aWVy6i6Y",
    authDomain: "facebook-messenger-a9393.firebaseapp.com",
    databaseURL: "https://facebook-messenger-a9393-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-a9393",
    storageBucket: "facebook-messenger-a9393.appspot.com",
    messagingSenderId: "185255885749",
    appId: "1:185255885749:web:0c5b98c22913a3b86377fc",
    measurementId: "G-2NSX0YNCD3"
  });

  const db=firebaseApp.firestore();
  export default db;