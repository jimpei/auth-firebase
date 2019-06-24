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

<script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-auth.js"></script>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "SAMPLE!! Welcome to Your Vue.js App"
    };
  }
};
console.log('debug Chat.vue start');
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
console.log('debug Chat.vue end');


</script>
