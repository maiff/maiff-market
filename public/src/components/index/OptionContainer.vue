<template>
  <ul class="options-container" v-show="isShow">
    
  </ul>
</template>



<script>
export default {
  name: 'optionContainer',
  components: {
  },
  computed: {
    isShow () {
      return this.$store.state.autoInfo.isLogined
    }
  }
}
</script>


<style lang="scss" scoped>
.options-container{
    list-style: none;
    margin-top: 30px;   
}
</style>