<template>
    <main>
        <GoodItem></GoodItem>
        <GoodItem></GoodItem>
        <GoodItem></GoodItem>
        <GoodItem></GoodItem>
        <GoodItem></GoodItem>
        <GoodItem></GoodItem>
        
    </main>
</template>

<script>
import GoodItem from './GoodItem'

export default {
  name: 'maiffMain',
  components: {
    GoodItem
  }
}
</script>

<style scoped>
main{
    min-height: calc(100vh - 160px);
}
</style>