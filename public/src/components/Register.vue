<template>
  <div class="regist">
      <CommonHead title="注册"></CommonHead>
      <RegistForm></RegistForm>
  </div>
</template>

<script>
import CommonHead from './common/CommonHead'
import RegistForm from './regist/RegistForm'

export default {
  name: 'login',
  components: {
    CommonHead,
    RegistForm
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
