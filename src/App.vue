<template>
  <div id="app">
    <Header/>
    <img src="./assets/logo.png">
    <Chat/>
    <Sample/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sample from './components/Sample'
import Chat from './components/Chat'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Chat,
    Sample,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
