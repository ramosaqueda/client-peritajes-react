import * as firebase from "firebase";

// credentiales of firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyC7-KwpcBTTDxA4JHZB1w7Lgrwe7ED_TAo",
  authDomain: "fullstack-ecomerce.firebaseapp.com",
  projectId: "fullstack-ecomerce",
  storageBucket: "fullstack-ecomerce.appspot.com",
  messagingSenderId: "390034514489",
  appId: "1:390034514489:web:f98e372f0c0f1f8c26e3e8"
};

// initialize app with firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();