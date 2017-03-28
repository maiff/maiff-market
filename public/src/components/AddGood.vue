<template>
  <div class="addGood">
      <CommonHead title="上传物品"></CommonHead>
      <AddGoodForm></AddGoodForm>
  </div>
</template>

<script>
import CommonHead from './common/CommonHead'
import AddGoodForm from './addGood/AddGoodForm'
export default {
  name: 'addGood',
  components: {
    CommonHead,
    AddGoodForm
  }
}
</script>

<style lang="scss">

</style>
