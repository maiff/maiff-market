<template>
  <div id="popup-captcha-mobile" v-show="isShow" ref="codeContainer"></div>
</template>

<script>
export default {
  name: 'verifyCode',
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    isShow () {
      return this.$store.state.mask.maskIsShow
    }
  }
}
</script>

<style lang="scss" scoped>
  #popup-captcha-mobile {
      z-index: 1000;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      z-index: 9999;
  }
</style>