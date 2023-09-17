// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvsYbzEEDnAySIZ4mgzFT1gqZuqhACrhc",
  authDomain: "chat-6c3ca.firebaseapp.com",
  projectId: "chat-6c3ca",
  storageBucket: "chat-6c3ca.appspot.com",
  messagingSenderId: "938740113378",
  appId: "1:938740113378:web:d73d1a670ae71acfb8e3bb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };