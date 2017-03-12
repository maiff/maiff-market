<template>
  <div>
    <form id="form" v-on:submit.prevent="login">
      <div class="input-field">
        <label>用户名：</label>
        <input type="text" v-model="newUser.username" placeholder="username">
      </div>
      <div class="input-field">
        <label>密&nbsp;&nbsp;&nbsp;码：</label>
        <input type="password" v-model="newUser.password" placeholder="password">
      </div>
      <input type="submit" value="登录" >
      <div class="login-choose">
        <a href="">注册</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">忘了密码？</a>
      </div>
      <div id="popup-captcha-mobile"></div>
    </form> 
  </div>
</template>

<script>
import axios from 'axios'
// import initGeetest from 'initGeetest'
axios.get(`/loginRegist?${(new Date()).getTime()}`)
     .then(function (response) {
       console.log(response)
     })
export default {
  name: 'loginForm',
  data () {
    return {
      newUser: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    validation: function () {
      return {
        name: !!this.newUser.username.trim(),
        email: !!this.newUser.password
      }
    },
    isValid: function () {
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    toggleMask: function () {
      this.$store.commit('toggleMaskState')
    },
    login: function () {
      this.toggleMask()
    }
  }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass_tool/base.scss";
    @import "../../assets/sass_tool/_size.scss";
    @import "../../assets/sass_tool/_center.scss";
    form{
      position: relative;
      @include center();
      width: 90%;
      margin-top: -10%;
      .input-field{
        margin: 30px 0;
        overflow: hidden;
        display: flex;
        label{
          font-size: 18px;
          line-height: 30px;
          flex: 0 1 auto;
          white-space:nowrap;
          width: 72px;
        }
        input{
          flex: 1;
          @include size(75%,30px);
          border: solid 1px #1989fa;
          border-radius: 3px;
          padding-left: 5px;
          font-size: 18px;
        }
      }
      input[type="submit"]{
        @include size(100%,40px);
        background: #1989fa;
        line-height: 40px;
        color: #fff;
        font-size: 20px;
        border: none;
        margin:15px 0;
      }
      .login-choose{
        text-align: center;
        a{
          color: #1989fa;
        }
      }
    }

    #popup-captcha-mobile {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      z-index: 9999;
    }
</style>