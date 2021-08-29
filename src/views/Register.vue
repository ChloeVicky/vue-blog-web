<template>
    <div class="form-wrap">
      <form action="" class="register">
          <p class="login-register">
              Already have an account?
              <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
          </p>
          <h2>Create Your Account For Free</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="first name" v-model="firstname"/>
                  <User class="icon" />
              </div>
              <div class="input">
                  <input type="text" placeholder="last name" v-model="lastname"/>
                  <User class="icon" />
              </div>              
              <div class="input">
                  <input type="text" placeholder="username" v-model="username"/>
                  <User class="icon" />
              </div>
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
          <button @click.prevent="register">Sign Up</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import Mail from '../assets/icons/mail.svg';
import Lock from '../assets/icons/lock.svg';
import User from '../assets/icons/user.svg';
import firebase from 'firebase/app';
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
    name: "Register",
    components: {
        Mail,
        Lock,
        User
    },
    data(){
        return{
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errMsg: ""
        }
    },
    methods: {
        async register(){
            if(this.firstname !== "" 
            && this.lastname !== "" 
            && this.username !== "" 
            && this.email !== "" 
            && this.password !== "")
            {
                this.error = false;
                this.errMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("user").doc(result.user.uid);
                await dataBase.set({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.username,
                    email: this.email
                });
                this.$router.push({name: "Home"});
                return;
            }
            this.error = true;
            this.errMsg = "Please fill all the fields";
            return;
        }
    }
}
</script>

<style lang="scss" scoped>
.register{
    h2{
        max-width: 350px;

    }
}
</style>