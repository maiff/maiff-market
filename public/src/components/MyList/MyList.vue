<template>
    <main>
        <GoodItem v-for="goodItem in goodList" :key="goodItem.id" :price="goodItem.price" :imgUrl="goodItem.imgUrl" :name="goodItem.name" :time="goodItem.time" :goodId="goodItem.id"></GoodItem>
    </main>
</template>

<script>
import GoodItem from '../index/GoodItem'
import getMyList from './getMyList.js'
export default {
  name: 'maiffMain',
  components: {
    GoodItem
  },
  mounted () {
    getMyList().then((res) => {
      return res.data
    })
    .then((data) => {
      data.error && window.alert('请先登录')
      data.error || this.$store.commit('modifyMyList', data)
    })
  },
  computed: {
    goodList () {
      return this.$store.state.mainList.myList
    }
  }
}
</script>

<style scoped>
main{
    min-height: calc(100vh - 160px);
}
</style>