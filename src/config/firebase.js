import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaFDH9Su4q2PDQdu8VBvmFAX1lguyXrpo",
  authDomain: "react-firebase-3.firebaseapp.com",
  databaseURL: "https://react-firebase-3.firebaseio.com",
  projectId: "react-firebase-3",
  storageBucket: "react-firebase-3.appspot.com",
  messagingSenderId: "12184551121",
  appId: "1:12184551121:web:7f050702638982ba"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

function login(email, password) {
  new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(e => {
        console.log('CONSOLE FROM FIREBASE.JS',e.user);
        resolve(e.user);
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        reject(alert(errorMessage));
      });
  });
}

function signup(email, password) {
  new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(e => {
        resolve(console.log(e));
      })
      .catch(function(error) {
        // Handle Errors here.
        //   var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        reject(alert(errorMessage));
      });
  });
}

export { login, signup };
