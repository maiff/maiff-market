<template>
  <div>
    <form id="form" v-on:submit.prevent="login">
      <div class="input-field">
        <label>用户名：</label>
        <input type="text"  placeholder="username" v-model="username">
      </div>
      <div class="input-field">
        <label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input type="password"  placeholder="password" v-model="password">
      </div>
      <input type="submit" value="登录" >
      <div class="login-choose">
        <a href="">注册</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">忘了密码？</a>
      </div>
    </form> 
  </div>
</template>

<script>
import code from './code.js'
let newUser = {
  username: '',
  password: ''
}
let vm = {
  name: 'loginForm',
  data () {
    return {
      newUser: newUser
    }
  },
  computed: {
    getAuto () {
      return {
        username: this.newUser.username,
        password: this.newUser.password
      }
    },
    validation: function () {
      return {
        name: !!this.newUser.username.trim(),
        password: !!this.newUser.password
      }
    },
    isValid: function () {
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
    isShow () {
      return this.$store.state.mask.maskIsShow
    },
    username: {
      get () {
        return this.$store.state.autoInfo.username
      },
      set (value) {
        this.$store.commit('updateUsername', value)
      }
    },
    password: {
      get () {
        return this.$store.state.autoInfo.password
      },
      set (value) {
        this.$store.commit('updatePassword', value)
      }
    }
  },
  methods: {
    toggleMask: function () {
      this.$store.commit('toggleMaskState')
    },
    login: function () {
      this.toggleMask()
      this.$store.state.mask.maskIsShow && code((res) => {
        // console.log(data.status)
        // console.log(data)
        if (res.data.status === 'success') {
          document.body.innerHTML = '登录成功！'
        }
      })
    }
  }
}
export default vm
</script>
<style lang="scss" scoped>
    @import "../../assets/sass_tool/base.scss";
    @import "../../assets/sass_tool/_size.scss";
    @import "../../assets/sass_tool/_center.scss";
    form{
      position: relative;
     
      width: 90%;
      margin: 36% auto;
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

</style>