// Import the functions you need from the SDKs you need
 
import firebase from 'firebase/app'
import "firebase/auth"

 
 
// credentiales of firebase SDK

const firebaseConfig = {


  apiKey: "AIzaSyCSyQ4aJ0y1BvV0Gpb9Qx0Pmym5koEyhdY",
  authDomain: "sysper-ugi.firebaseapp.com",
  projectId: "sysper-ugi",
  storageBucket: "sysper-ugi.appspot.com",
  messagingSenderId: "1072525832633",
  appId: "1:1072525832633:web:2313e0e92d37ef25e20668"
};




// initialize app with firebase
firebase.initializeApp(firebaseConfig);

// export
 

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  