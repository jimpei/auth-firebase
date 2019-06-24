<template>
  <div id="app">
    <Header :userData="userData"></Header>
    <img src="./assets/logo.png">
    <Chat/>
    <Sample/>
    {{ test }}
    <Footer/>
  </div>
</template>

<script>
console.log("debug App.vue start");
import firebase from "firebase";
import Header from "./components/Header";
import Sample from "./components/Sample";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

export default {
  name: "App",
  props: ["test"], // main.jsから受け取ったデータ {{test}}で参照する
  components: {
    Header,
    Chat,
    Sample,
    Footer
  },
  created() {
    // result = this.auth();
    // console.log('created '+ result);
    // this.userData = this.auth();
    // console.log(this.auth());
    // console.log(JSON.stringify(this.auth(), hoge()));
  },
  methods: {
    auth: function() {
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
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log('debug ' + user.email);
          return user.email;
          // ...
        })
        .catch(function(error) {
          console.log('error');
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(error);
          return 'error';
          // ...
        });
      // var name, email, photoUrl, uid, emailVerified, token;
      // firebase
      //   .auth()
      //   .onAuthStateChanged(function(user) {
      //   if (user) {
      //     // User is signed in.
      //     console.log("debug user sign in");
      //     var user = firebase.auth().currentUser;

      //     if (user != null) {
      //       name = user.displayName;
      //       email = user.email;
      //       photoUrl = user.photoURL;
      //       // user.getIdToken(true).then(function(idToken){
      //       //   token = idToken;
      //       //   console.log(token);
      //       // });
      //     }
      //     // console.log(name);
      //     console.log(email);
      //     this.userData = 'aaaaaaaaa';
      //   } else {
      //     // No user is signed in.
      //     console.log("debug guest user");
      //   }
      //   return 'hoge';
      // })
      // // `this` は vm インスタンスを指します
      // // return "hoge";
      // console.log('create end' + email)
      // var tmp = 'aadsfaaaaa';
      // this.userData = tmp;
    },
  },
  data() {
    return {
      userData: "App.vueのデータ"
    };
  }
};
console.log("debug App.vue end");
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
