import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoOmEqzA87ePEHfjdvREvb5J2CeZXfL9g",
  authDomain: "u4-i-a.firebaseapp.com",
  projectId: "u4-i-a",
  storageBucket: "u4-i-a.appspot.com",
  messagingSenderId: "814119878168",
  appId: "1:814119878168:web:e545f138040805e3534d6d",
  measurementId: "G-3225XR1T9H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
