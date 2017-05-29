<template>
    <div class="login">
        <VerifyCode></VerifyCode>
        <MaiffMask></MaiffMask>
        <CommonHead title="登录"></CommonHead>
        <LoginForm></LoginForm>
    </div>
</template>

<script>
import CommonHead from './common/CommonHead'
import LoginForm from './login/LoginForm'
import VerifyCode from './common/VerifyCode'
import MaiffMask from './common/MaiffMask'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: {
    CommonHead,
    LoginForm,
    MaiffMask,
    VerifyCode
  },
  beforeCreate () {
    if (this.$store.state.autoInfo.isLogined === true) {
      this.$router.push('/')
    }
  },
  methods: {
    close () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
</style>
