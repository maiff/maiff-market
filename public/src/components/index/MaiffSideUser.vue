<template>
   <div class="user-container">
      <h4>测试用户</h4>
      <router-link to="/login" v-show="isShow">
        <h4><a href="">登录</a></h4>
      </router-link>
       <router-link to="/register" v-show="isShow">
        <h4><a href="">注册</a></h4>
      </router-link>
   </div>
</template>



<script>
export default {
  name: 'maiffSideUser',
  computed: {
    isShow () {
      return !this.$store.state.autoInfo.isLogined
    }
  }
}
</script>


<style lang="scss" scoped>
.user-container{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    a{
        color:#4fbef6;
    }
}
</style>