<template>
  <header>
    <span class="back" @click="back()">
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
  props: ['title'],
  methods: {
    back () {
      window.history.go(-1)
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
        .back{
          float: left;
          padding-left: 20px;
        }

}
</style>