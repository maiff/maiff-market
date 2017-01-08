<template>
   <div class="user-container">
      <h4>maiff</h4>
      <h4><a href="">登录</a></h4>
      <h4><a href="">注册</a></h4>
   </div>
</template>



<script>
export default {
  name: 'maiffSideUser'
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