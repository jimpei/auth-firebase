<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">{{ userData }}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: ['userData'],
  data () {
    return {
      msg: 'app名',
    }
  }
};
console.log('debug Header.vue ');
</script>

