<template>
  <div class="form-wrap">
      <form action="" class="login">
          <p class="login-register">
              Don't have an account?
              <router-link class="router-link" :to="{name: 'Register'}">Register</router-link>
          </p>
          <h2>Login To Travel Blogs</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="email" v-model="email"/>
                  <Mail class="icon" />
              </div>
              <div class="input">
                  <input type="password" placeholder="password" v-model="password"/>
                  <Lock class="icon" />
              </div>
              <div v-show="error" class="error">{{this.errMsg}}</div>
          </div>
          <router-link class="forgot-password" :to="{name: 'ForgotPassword'}">Forgot your password?</router-link>
          <button @click.prevent="signIn">Sign In</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import Mail from '../assets/icons/mail.svg';
import Lock from '../assets/icons/lock.svg';
import firebase from 'firebase/app';
import "firebase/auth";
export default {
    name: "Login",
    components: {
        Mail,
        Lock
    },
    data() {
        return{
            email: null,
            password: null,
            error: null,
            errMsg: ""
        }
    },
    methods:{
        signIn(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
                this.$router.push({name: "Home"});
                this.error = false;
                this.errMsg = "";
            }).catch((err)=>{
                this.error = true;
                this.errMsg = err.message;
            })
        }
    }
}
</script>

<style lang="scss">
.form-wrap{
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 90%;
    @media (min-width:900px) {
        width: 100%;
    }
    .login-register{
        margin-bottom: 32px;

        .router-link{
            color: #000;
        }
    }
    form{
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        @media (min-width: 900px) {
            padding: 0 50px;
        }

        h2{
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;
            @media (min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs{
            width: 100%;
            max-width: 350px;
            .input{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
                input{
                    width: 100%;
                    border: none;
                    background: #f2f7f6;
                    padding: 4px 4px 4px 30px;
                    height: 50px;
                    &:focus{
                        outline: none;
                    }
                }
                .icon{
                    width: 12px;
                    height: auto;
                    position: absolute;
                    left: 6px;
                }
            }
        }

        .forgot-password{
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0 32px;
            border-bottom: 1px solid transparent;
            transition: 0.5s ease all;
            &:hover{
                border-color: #303030;
            }
        }

        .angle{
            display: none;
            position: absolute;
            background: #fff;
            transform: rotateZ(3deg);
            width: 60px;
            right: -30px;
            height: 101%;
            @media (min-width: 900px) {
                display: initial;
            }
        }
    }

    .background{
        display: none;
        flex: 2;
        background-size: auto 100%;
        background-image: url("../assets/webPhotos/background.png");
        // width: auto;
        // height: 100%;
        @media (min-width:900px) {
            display: initial;
        }
    }
}
</style>