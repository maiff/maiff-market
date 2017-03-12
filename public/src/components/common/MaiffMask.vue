<template>
  <div id="mask" v-if="isShow" @click="toggleMask"></div>
</template>

<script>
export default {
  name: 'maiffMask',
  data () {
    return {
    }
  },
  methods: {
    toggleMask () {
      this.$store.commit('toggleMaskState')
    }
  },
  computed: {
    isShow () {
      return this.$store.state.mask.maskIsShow
    }
  }
}
</script>

<style lang="scss" scoped>
  #mask {
    z-index: 999;
    position: fixed;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }
</style>