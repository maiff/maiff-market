<template>
  <ul class="options-container">
    <OptionItem></OptionItem>
    <OptionItem></OptionItem>
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
  }
}
</script>


<style lang="scss" scoped>
.options-container{
    list-style: none;
    margin-top: 30px;   
}
</style>