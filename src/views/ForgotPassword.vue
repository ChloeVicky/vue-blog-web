<template>
  <div class="reset-password">
      <Modal v-if="modalActive" v-on:close-modal="closeModal" />
      <Loading v-if="loading" />
      <div class="form-wrap">
        <form class="reset">
            <p class="login-register">
                Back to
                <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
            </p>
            <h2>Reset Password</h2>
            <p>Forgot your password? Enter your email to reset it</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="email" v-model="email"/>
                    <Mail class="icon" />
                </div>
            </div>
            <button>Reset</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Mail from '../assets/icons/mail.svg';
import Modal from '../components/Modal.vue';
import Loading from '../components/Loading.vue'
export default {
    name: "ForgotPassword",
    components: {
      Mail,
      Modal,
      Loading
    },
    data(){
      return{
        email: null,
        modalActive: false,
        modalMessage: "",
        loading: null
      }
    },
    methods:{
      closeModal(){
        this.modalActive = !this.modalActive;
        this.email = "";
      }
    }
}
</script>

<style lang="scss" scoped>
.reset-password{
  position: relative;
  .form-wrap{
    .reset{
      h2{
        margin-bottom: 8px;
      }
      p{
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>