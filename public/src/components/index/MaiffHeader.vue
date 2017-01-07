<template>
  <header>
    <span class="menu">
      <label class='sideMenuControl' for='sideToggle'>
        <i class="iconfont icon-menu"></i>
      </label> 
    </span>
    <span class="title">
      二手工坊
    </span>
    <span class="sub-title">
      {{campus}}
    </span>
  </header>
</template>

<script>
export default {
  name: 'maiffHeader',
  data () {
    return {
      campus: '东华大学'
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/sass_tool/base.scss";
    @import "../../assets/sass_tool/_size.scss";
    @import "../../assets/sass_tool/font.scss";
    @import "../../assets/sass_tool/_center.scss";
    header{
        line-height: 60px;
        position: relative;
        background: $maincolor;
    
        @include size(100%,60px);
        color:#fff;
        .title{
        
        font-size:20px;
        @include center();
        
        }
        .menu{
        float: left;
        margin-left: 20px;
        
        }
        .sub-title{
        float: right;
        margin-right: 20px;
        }
}
</style>