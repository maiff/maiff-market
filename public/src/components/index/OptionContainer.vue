<template>
  <ul class="options-container" v-show="isShow">
    <router-link to="/addgood">
      <OptionItem content="上传物品"></OptionItem>
    </router-link>
    <router-link to="/myList">
      <OptionItem content="我的上传"></OptionItem>
    </router-link>
    <OptionItem></OptionItem>
    <OptionItem></OptionItem>
    <OptionItem></OptionItem>
  </ul>
</template>



<script>
import OptionItem from './OptionItem'
export default {
  name: 'optionContainer',
  components: {
    OptionItem
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