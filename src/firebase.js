// Import the functions you need from the SDKs you need
 
import firebase from 'firebase/app'
import "firebase/auth"

 
 
// credentiales of firebase SDK

const firebaseConfig = {


  apiKey: "",
  authDomain: "sysper-ugi.firebaseapp.com",
  projectId: "sysper-ugi",
  storageBucket: "sysper-ugi.appspot.com",
  messagingSenderId: "",
  appId: "1:1072525832633::"
};




// initialize app with firebase
firebase.initializeApp(firebaseConfig);

// export
 

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  
