<template>
  <div class="index">  
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
import Hello from './index/Hello'
import MaiffHeader from './index/MaiffHeader'
import MaiffNav from './index/MaiffNav'
import MaiffMain from './index/MaiffMain'
import MaiffFooter from './index/MaiffFooter'

import SideToggle from './index/SideToggle'
import MaiffSide from './index/MaiffSide'
import MaiffMask from './index/Mask'

export default {
  name: 'index',
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

</style>
