import * as firebase from "firebase";

// credentiales of firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyDfN_wpQoS_grBE5KgKLpN8U7Q1IDLMLd4",
  authDomain: "fullstack-ecommerce-bcf02.firebaseapp.com",
  projectId: "fullstack-ecommerce-bcf02",
  storageBucket: "fullstack-ecommerce-bcf02.appspot.com",
  messagingSenderId: "98854101103",
  appId: "1:98854101103:web:2bdb4ead9e0ceeef5a6d9a",
};

// initialize app with firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();