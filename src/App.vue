<template>
  <div id="app">
    <Navigation />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
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
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
