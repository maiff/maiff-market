<template>
   <li><a href="#">{{content}}</a></li>
</template>



<script>
export default {
  name: 'optionContainer',
  data () {
    return {
      content: '测试'
    }
  }
}
</script>


<style lang="scss" scoped>
 li{
    padding: 10px;
    a{
        color:#333;
        display: block;
    }
}
</style>