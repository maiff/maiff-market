<template>
    <main>
        <GoodItem v-for="goodItem in goodList" :key="goodItem.id" :price="goodItem.price" :imgUrl="goodItem.imgUrl" :name="goodItem.name" :time="goodItem.time" :goodId="goodItem.id"></GoodItem>
    </main>
</template>

<script>
import GoodItem from './GoodItem'
import getList from './getList.js'
export default {
  name: 'maiffMain',
  components: {
    GoodItem
  },
  mounted () {
    getList(1).then((res) => {
      return res.data
    })
    .then((data) => {
      this.$store.commit('clearList')
      this.$store.commit('pushList', data)
    })
  },
  computed: {
    goodList () {
      return this.$store.state.mainList.mainList
    }
  }
}
</script>

<style scoped>
main{
    min-height: calc(100vh - 160px);
}
</style>