<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="scss">
@import "./assets/sass_tool/base.scss";
#app {  
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
}

</style>
