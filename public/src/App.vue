<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/Index'
import Login from './components/Login'

import Cookies from 'js.cookie'

export default {
  name: 'app',
  components: {
    Index,
    Login
  },
  beforeCreate () {
    if (this.$store.state.autoInfo.isLogined === false && Cookies.get('sessionId') !== null) {
      console.log('check')
      this.$store.commit('login')
    }
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
