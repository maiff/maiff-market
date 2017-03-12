<template>
  <header>
    <span class="back">
        <i class="arrow icon-arrow-copy"></i>
    </span>
    <span class="title">
      {{title}}
    </span>
  </header>
</template>

<script>
export default {
  name: 'commonHeadhead',
  data () {
    return {}
  },
  props: ['title']
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
        .back{
          float: left;
          margin-left: 20px;
        }

}
</style>