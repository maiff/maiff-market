<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <Toast></Toast>
  </div>
</template>

<script>
import Index from './components/Index'
import Login from './components/Login'
import Toast from './components/common/toast'
import Cookies from 'js.cookie'

export default {
  name: 'app',
  components: {
    Index,
    Login,
    Toast
  },
  beforeCreate () {
    if (this.$store.state.autoInfo.isLogined === false && Cookies.get('sessionId') !== null && Cookies.get('name') !== null) {
      // console.log('check')
      this.$store.commit('login', Cookies.get('name'))
    }
  }
}
</script>

<style lang="scss">
@import "./assets/sass_tool/base.scss";
@import "./assets/sass_tool/normalize.scss";
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
