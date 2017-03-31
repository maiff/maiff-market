<template>
  <div>
      <CommonHead title="物品详情"></CommonHead>
      <GoodInfo></GoodInfo>
  </div>
</template>

<script>
import CommonHead from './common/CommonHead'
import GoodInfo from './good/GoodDetail'
export default {
  name: 'goodDetail',
  components: {
    CommonHead,
    GoodInfo
  }
}
</script>

<style lang="scss">

</style>
