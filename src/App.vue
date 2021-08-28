<template>
  <div id="app">
    <Navigation />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
// app.vue的css没有scope，所以大家都可以运用到这里面的样式
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.link-light {
  color: #fff;
}
</style>
