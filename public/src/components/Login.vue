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
import MaiffMask from './common/MaiffMask'
import VerifyCode from './common/VerifyCode'
export default {
  name: 'login',
  components: {
    CommonHead,
    LoginForm,
    MaiffMask,
    VerifyCode
  }
}
</script>

<style lang="scss">

</style>
