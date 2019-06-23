// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from "firebase";
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD2KRtOMBdZxfHDebpzeJbBYKnp55UpJOs",
  authDomain: "auth-firebase-d6c4b.firebaseapp.com",
  databaseURL: "https://auth-firebase-d6c4b.firebaseio.com",
  projectId: "auth-firebase-d6c4b",
  storageBucket: "auth-firebase-d6c4b.appspot.com",
  messagingSenderId: "189086067197",
  appId: "1:189086067197:web:a04b29f87bbdeef2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GithubAuthProvider();
firebase
  .auth()
  .signInWithPopup(provider)
  .then(function(result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
