<template>
    <footer @click="getMore()">
        点击加载更多……
    </footer>
</template>



<script>
import getList from './getList.js'
export default {
  name: 'maiffFooter',
  methods: {
    getMore () {
      this.$store.commit('addCount')
      getList(this.$store.state.mainList.count).then((res) => {
        return res.data
      })
      .then((data) => {
        if (data.length === 0) window.alert('没有更多了！')
        this.$store.commit('pushList', data)
      })
    }
  }
}
</script>


<style scoped>
footer {
  height: 50px;
  text-align: center;
  line-height: 50px;
  color:#4fbef6;
  cursor:pointer;
}
</style>
