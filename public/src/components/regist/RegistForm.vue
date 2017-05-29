<template>
  <div>
    <form id="form" v-on:submit.prevent="regist">
      <mu-text-field label="学号" hintText="东华大学学号" type="number" @blur="valid('numError')" v-model="stuNum" labelFloat fullWidth :errorText="error.numError" /><br/>
      <mu-text-field label="密码" hintText="密码包含字母且长度大于六位" type="password" @blur="valid('pasError')" v-model="password" labelFloat fullWidth :errorText="error.pasError" /><br/>
      <mu-text-field label="确认密码" hintText="跟上次一致" type="password" @blur="valid('comError')" v-model="comfirePassword" labelFloat fullWidth :errorText="error.comError" /><br/>
      <mu-text-field label="身份证后六位" hintText="与学号相匹配" type="number" @blur="valid('idCardError')" v-model="idCard" labelFloat fullWidth :errorText="error.idCardError" /><br/>      
      <mu-raised-button label="注册" class="demo-raised-button" primary fullWidth @click="regist"/>
      <div class="login-choose">
        <router-link to="/login"><a href="">登录</a></router-link>
      </div>
    </form>
    <mu-dialog :open="dialog" title="注册失败">
      {{registMes}}
      <mu-flat-button label="确定" slot="actions" primary @click="dialog = false"/>
    </mu-dialog>
  </div>
</template>

<script>
import post from './post.js'

const map = {
  numError: 'stuNum',
  pasError: 'password',
  comError: 'comfirePassword',
  idCardError: 'idCard'
}
const errorInfo = {
  name: '用户名不正确，请以下划线字母开头，并且长度大于六位小于十位',
  password: '密码至少包含字母并且长度大于六位小于20位',
  comfirePassword: '两次密码不一致',
  stuNum: '学号格式不正确',
  idCard: '身份证请输入六位数字'
}

export default {
  name: 'regist',
  data () {
    return {
      comfirePassword: '',
      error: {
        numError: '',
        pasError: '',
        comError: '',
        idCardError: ''
      },
      registMes: '',
      dialog: false
    }
  },
  computed: {
    validation: function () {
      let passwordRE = /[a-zA-Z]/
      return {
        stuNum: !!this.stuNum.trim(),
        password: passwordRE.test(this.password) && this.password.length >= 6 && this.password.length < 20,
        comfirePassword: this.comfirePassword === this.password,
        idCard: this.idCard.length === 6
      }
    },
    password: {
      get () {
        return this.$store.state.register.password
      },
      set (value) {
        this.$store.commit('setPassword', value)
      }
    },
    stuNum: {
      get () {
        return this.$store.state.register.stuNum
      },
      set (value) {
        this.$store.commit('setStuNum', '' + value)
      }
    },
    idCard: {
      get () {
        return this.$store.state.register.idCard
      },
      set (value) {
        this.$store.commit('setIdCard', '' + value)
      }
    }
  },
  methods: {
    regist () {
      if (this.isValid()) {
        post().then((res) => {
          return res.data
        }).then((data) => {
          if (data.status === 1) {
            this.showSnackbar('注册成功～')
            this.$router.push('/login')
          } else {
            this.dialog = true
            this.registMes = data.msg
          }
        })
      }
    },
    isValid: function (text) {
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    },
    valid (text) {
      this.validation[map[text]] ? this.error[text] = '' : this.error[text] = (errorInfo[map[text]])
    },
    showSnackbar (text) {
      this.$store.commit('toggleToast', true)
      this.$store.commit('setToastMes', text)
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.$store.commit('toggleToast', false) }, 2000)
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
      width: 90%;
      margin: 10% auto;
      .input-field{
        margin: 30px 0;
        overflow: hidden;
        display: flex;
        label{
          font-size: 18px;
          line-height: 30px;
          flex: 0 1 auto;
          white-space:nowrap;
          width: 90px;
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
      .login-choose{
        text-align: center;
        margin-top: 10px;
        a{
          color: #1989fa;
        }
      }
    }
    #idcard{
      width: 150px;
    }

    @media  (min-width: 400px){
      form{
          @include center();
          margin: 0 !important;
      }
    }
</style>