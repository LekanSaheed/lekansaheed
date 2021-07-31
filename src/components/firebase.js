import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA4She78gTH_p0hSz_0hec4C1DY3vkwW0c",
    authDomain: "gocart-3568.firebaseapp.com",
    projectId: "gocart-3568",
    storageBucket: "gocart-3568.appspot.com",
    messagingSenderId: "528234291138",
    appId: "1:528234291138:web:f307e9bff21c962170c05b",
    measurementId: "G-RZP3QNWXXQ"
  };

  Firebase.initializeApp(firebaseConfig)

  const db = Firebase.firestore()
  const storage = Firebase.storage()
  export {db, storage}