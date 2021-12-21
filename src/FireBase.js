import firebase from 'firebase'

//Authentications
import 'firebase/auth'
//firbase database
import 'firebase/firestore'
//Real time 
import 'firebase/database'
// storage
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCyQIRlGAAAkVFKTmclCKwlV9c0lKu6jCA",
  authDomain: "spotify-clone-7ecac.firebaseapp.com",
  projectId: "spotify-clone-7ecac",
  storageBucket: "spotify-clone-7ecac.appspot.com",
  messagingSenderId: "353627153445",
  appId: "1:353627153445:web:5b95c3d38f0371de2d4bcc"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;