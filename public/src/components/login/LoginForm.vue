<template>
  <div>
    <form id="form">
      <mu-text-field label="学号" hintText="请输入学号" type="number" @blur="validateNum" v-model="stuNum" labelFloat fullWidth :errorText="numError" /><br/>
      <mu-text-field label="密码" hintText="请输入密码" type="password" @blur="validatePas" v-model="password" labelFloat fullWidth :errorText="passwordError" /><br/>
      <mu-raised-button label="登录" class="demo-raised-button" primary fullWidth @click="login()"/>
      <div class="login-choose">
        <router-link to="/register">
          <a href="">注册</a>
        </router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">忘了密码？</a>
      </div>
    </form> 
    <mu-dialog :open="dialog" title="登录失败">
      学号或者密码错误
      <mu-flat-button label="确定" slot="actions" primary @click="dialog = false"/>
    </mu-dialog>
  </div>
</template>

<script>
import code from './code.js'
import Cookies from 'js.cookie'
// import router from '../../router'

let vm = {
  name: 'loginForm',
  data () {
    return {
      numError: '',
      passwordError: '',
      dialog: false
    }
  },
  computed: {
    validation: function () {
      return {
        name: !!this.stuNum.trim(),
        password: !!this.password
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
    stuNum: {
      get () {
        return this.$store.state.autoInfo.stuNum
      },
      set (value) {
        this.$store.commit('updateStuNum', '' + value)
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
    validateNum () {
      if (!this.validation.name) this.numError = '学号不能为空'
      else this.numError = ''
    },
    validatePas () {
      if (!this.validation.password) this.passwordError = '密码不能为空'
      else this.passwordError = ''
    },
    login: function () {
      if (this.isValid) {
        this.toggleMask()
        this.$store.state.mask.maskIsShow && code((res) => {
          // console.log(data)
          if (res.data.status === 'success') {
            this.$store.commit('login', res.data.name)
            Cookies.set('sessionId', res.data.info)
            Cookies.set('name', res.data.name)
            this.toggleMask()
            this.showSnackbar('登录成功～')
            this.$router.push('/')
          } else {
            this.toggleMask()
            this.dialog = true
          }
        })
      }
    },
    showSnackbar (text) {
      this.$store.commit('toggleToast', true)
      this.$store.commit('setToastMes', text)
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.$store.commit('toggleToast', false) }, 2000)
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
        margin-top:15px;
        text-align: center;
        a{
          color: #1989fa;
        }
      }
    }
    @media  (min-width: 450px){
      form{
          @include center();
          margin: 0 !important;
      }
    }
</style>