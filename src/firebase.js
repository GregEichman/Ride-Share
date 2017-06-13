import firebase from "https://www.gstatic.com/firebasejs/4.1.2/firebase.js";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDrYfzqEJBfEFEae-nPPE1l2uVTLdSs3SU",
  authDomain: "ride-share-1eb74.firebaseapp.com",
  databaseURL: "https://ride-share-1eb74.firebaseio.com",
  projectId: "ride-share-1eb74",
  storageBucket: "ride-share-1eb74.appspot.com",
  messagingSenderId: "990239787128"
};

export default firebase.initializeApp(config);