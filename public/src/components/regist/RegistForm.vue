<template>
  <div>
    <form id="form" v-on:submit.prevent="regist">
      <div class="input-field">
        <label>用户名：</label>
        <input type="text"  placeholder="username" v-model="username">
      </div>
      <div class="input-field">
        <label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input type="password"  placeholder="password" v-model="password">
      </div>
      <div class="input-field">
        <label>确认密码：</label>
        <input type="password"  placeholder="password" v-model="comfirePassword">
      </div>
      <div class="input-field">
        <label>学&nbsp;&nbsp;&nbsp;&nbsp;号：</label>
        <input type="number"  placeholder="student number" v-model="stuNum">
      </div>
      <div class="input-field">
        <label id="idcard">身份证后六位：</label>
        <input type="number"  placeholder="123456" v-model="idCard">
      </div>
      <input type="submit" value="注册" >
      <div class="login-choose">
        <router-link to="/login"><a href="">登录</a></router-link>
      </div>
    </form> 
  </div>
</template>

<script>
import post from './post.js'
export default {
  name: 'regist',
  data () {
    return {
      comfirePassword: ''
    }
  },
  computed: {
    validation: function () {
      let usernameRE = /^[_\-a-zA-Z]\w+$/
      let passwordRE = /[a-zA-Z]/
      return {
        name: usernameRE.test(this.username.trim()) && this.username.length > 4 && this.username.length <= 15,
        password: passwordRE.test(this.password) && this.username.length >= 6 && this.username.length < 20,
        comfirePassword: this.comfirePassword === this.password,
        stuNum: !!this.stuNum.trim(),
        idCard: this.idCard.length === 6
      }
    },
    username: {
      get () {
        return this.$store.state.register.username
      },
      set (value) {
        this.$store.commit('setUsername', value)
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
      // console.log(this.isValid)
      if (this.isValid()) {
        post((res) => {
          // console.log()
          if (res.data.status === 1) {
            window.alert('注册成功')
            this.$router.push('/login')
          } else {
            window.alert(res.data.msg)
          }
        })
      }
    },
    isValid: function () {
      let errorInfo = {
        name: '用户名不正确，请以下划线字母开头，并且长度大于六位小于十位',
        password: '密码至少包含字母并且长度大于六位小于20位',
        comfirePassword: '两次密码不一致',
        stuNum: '学号格式不正确',
        idCard: '身份证请输入六位数字'
      }
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        validation[key] || window.alert(errorInfo[key])
        return validation[key]
      })
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
      margin: 30% auto;
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