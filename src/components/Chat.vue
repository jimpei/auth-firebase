<template>
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col s12">
          <textarea
            name
            id="content"
            cols="30"
            rows="10"
            placeholder="Enterで投稿"
            class="materialize-textarea"
          ></textarea>
        </div>
        <div class="col s6"></div>
        <div class="col s6">
          <button id="post" class="waves-effect waves-light btn">投稿する</button>
          <a class="btn disabled">押せないよ</a>
        </div>
        <div class="col s6"></div>
        <div class="col s6">
          <p>このチャットをシェアする！</p>
          <a
            href="https://twitter.com/share"
            class="twitter-share-button"
            data-lang="ja"
            data-count="none"
          >ツイート</a>
        </div>
      </div>
    </div>

    <div id="messages">
      <div id="dummy1">↓ここに投稿される</div>
      <div id="dummy">↑ここに投稿される</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "SAMPLE!! Welcome to Your Vue.js App"
    };
  }
};
</script>
<script>
!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? "http" : "https";
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "twitter-wjs");
</script>

<script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"
></script>
<script>
// import firebase from "firebase";

// "use strict";

// var firebaseConfig = {
//   apiKey: "AIzaSyD2KRtOMBdZxfHDebpzeJbBYKnp55UpJOs",
//   authDomain: "auth-firebase-d6c4b.firebaseapp.com",
//   databaseURL: "https://auth-firebase-d6c4b.firebaseio.com",
//   projectId: "auth-firebase-d6c4b",
//   storageBucket: "auth-firebase-d6c4b.appspot.com",
//   messagingSenderId: "189086067197",
//   appId: "1:189086067197:web:a04b29f87bbdeef2"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// //Firebaseの初期化
// // firebase.initializeApp({
//   // databaseURL: "https://auth-firebase-d6c4b.firebaseio.com/"
// // });
// const database = firebase.database();
// const ref = database.ref("messagesTable"); //テーブル名が入る
// let last_message = "dummy";

// //初期読み込み & pushイベント検知
// ref.on("child_added", snapshot => {
//   renderMessage({
//     id: snapshot.key,
//     value: snapshot.val()
//   });
// });

// //インジェクション対策
// const escapeHTML = val =>
//   $("<div>")
//     .text(val)
//     .html();

// //投稿処理
// const postAction = () => {
//   const content = escapeHTML($("#content").val());
//   if (content && content !== "") {
//     ref
//       .push({
//         title: "テストカラム", //カラム名titile
//         content: content,
//         date: new Date().getTime()
//       })
//       .then(res => {
//         console.log(res);
//       });
//   }
//   $("#content").val("");
// };

// //メッセージをDOM追加
// const renderMessage = message => {
//   // const message_html = `<p class="post-text">${escapeHTML(message.value.content)}</p>`;
//   const message_html = `<p>${escapeHTML(message.value.content)}</p>`;

//   let date_html = "";
//   if (message.value.date) {
//     // date_html = `<p class="post-date">${escapeHTML(new Date(message.value.date).toLocaleString())}</p>`;
//     date_html = `<p>${escapeHTML(
//       new Date(message.value.date).toLocaleString()
//     )}</p>`;
//   }

//   // $("#"+last_message).before(`<div id="${message.id}" class="post">${message_html}${date_html}</div>`);
//   $("#" + last_message).before(
//     `<div id="${
//       message.id
//     }" class="card horizontal"><div class="card-stacked"><div class="card-content">${message_html}</div><div class="card-action">${date_html}</div></div></div>`
//   );

//   last_message = message.id;

//   // こんなのが生成される
//   // <div class="card horizontal">
//   //     <div class="card-stacked">
//   //         <div class="card-content">
//   //             <!-- <p>I am a very simple card. I am good at containing small bits of information.</p> -->
//   //         </div>
//   //         <div class="card-action">
//   //             <!-- <p>ここになにか</p> -->
//   //         </div>
//   //     </div>
//   // </div>

//   console.log("debug j");
//   console.log(message_html);
//   console.log(date_html);
// };

// //クリック時の処理
// // $("#post").click(() => postAction());
// //エンターキータイプ時の処理
// // $("#content").keydown(e => {
// //   if (e.which == 13) {
// //     postAction();
// //     return false;
// //   }
// // });
</script>
