<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Index from './components/Index'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Index,
    Login
  }
}
</script>

<style lang="scss">
@import "./assets/sass_tool/base.scss";
@import "./assets/sass_tool/normalize.scss";
#app {  
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
}

</style>
