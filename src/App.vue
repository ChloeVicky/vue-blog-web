<template>
  <div id="app">
    <Navigation v-if="navigation"/>
    <router-view></router-view>
    <Footer v-if="navigation"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer.vue';
import firebase from 'firebase/app';
import "firebase/auth";
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  data(){
    return{
      navigation: null
    }
  },
  created(){
    this.checkRoute();
    console.log(firebase.auth().currentUser);
  },
  methods: {
    checkRoute(){
      if(this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword"){
        this.navigation = false;
        return;
      }
      this.navigation = true;
    }
  },
  watch: {
    $route(){
      this.checkRoute();
    }
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
.arrow{
  margin-left: 8px;
  width: 16px;
  height: auto;
  path{
    fill: #000
  }
}
.arrow-light{
  path{
    fill: #fff;
  }
}

button, .router-button{
  transition: .5s ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  &:focus{
    outline: none;
  }
  &:hover{
    background: rgba(48, 48, 48, 0.7);
  }
}

.button-ghost{
  color:#000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }
  i{
    margin-left: 8px;
  }
}

.button-light{
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive{
  pointer-events: none !important;
  cursor: none !important;
  background: rgba(128, 128, 128, 0.5) !important;
}

.blog-card-wrap{
  position: relative;
  padding: 80px 16px;
  background: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .blog-cards{
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.error{
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>
