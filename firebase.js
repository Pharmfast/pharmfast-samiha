import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6lQ5rLxySl1n9ZxAxXd_VwNPQRjB5k8c",
    authDomain: "pharmfast-3888e.firebaseapp.com",
    projectId: "pharmfast-3888e",
    storageBucket: "pharmfast-3888e.appspot.com",
    messagingSenderId: "1051349371740",
    appId: "1:1051349371740:web:065804c92b98ba181e4f99"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth };