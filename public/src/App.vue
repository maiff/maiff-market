<template>
  <div id="app">
    <SideToggle></SideToggle>
    <MaiffSide></MaiffSide>
    <MaiffMask></MaiffMask>
    <MaiffHeader></MaiffHeader>
    <MaiffNav></MaiffNav>
    <MaiffMain></MaiffMain>
    <MaiffFooter></MaiffFooter>
  </div>
</template>

<script>
import Hello from './components/index/Hello'
import MaiffHeader from './components/index/MaiffHeader'
import MaiffNav from './components/index/MaiffNav'
import MaiffMain from './components/index/MaiffMain'
import MaiffFooter from './components/index/MaiffFooter'

import SideToggle from './components/index/SideToggle'
import MaiffSide from './components/index/MaiffSide'
import MaiffMask from './components/index/Mask'

export default {
  name: 'app',
  components: {
    Hello,
    MaiffHeader,
    MaiffNav,
    MaiffMain,
    MaiffFooter,
    MaiffSide,
    MaiffMask,
    SideToggle
  }
}
</script>

<style lang="scss">
@import "./assets/sass_tool/base.scss";
#app {  
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
}

</style>
