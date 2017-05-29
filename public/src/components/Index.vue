<template>
  <div class="index">  
      <MaiffSide></MaiffSide>
      <MaiffHeader></MaiffHeader>
      <MaiffNav></MaiffNav>
      <MaiffMain></MaiffMain>
      <MaiffFooter></MaiffFooter>
  </div>
</template>

<script>
import MaiffHeader from './index/MaiffHeader'
import MaiffNav from './index/MaiffNav'
import MaiffMain from './index/MaiffMain'
import MaiffFooter from './index/MaiffFooter'

import MaiffSide from './index/MaiffSide'

export default {
  name: 'index',
  components: {
    MaiffHeader,
    MaiffNav,
    MaiffMain,
    MaiffFooter,
    MaiffSide
  }
}
</script>

<style lang="scss">

</style>
