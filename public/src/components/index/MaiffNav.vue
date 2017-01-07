<template>
  <nav>
    <ul class="category">
        <li>测试</li>
        <li>测试</li>                
        <li>测试</li>                
        <li>测试</li>                
        <li>测试</li>                
        <li>测试</li>                
        <li>测试</li>                
        <li>测试</li> 
        <li>测试</li>                
        <li>测试</li>                
        <li>测试</li>             
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'maiffNav'
}
</script>


<style lang="scss" scoped>
@import "../../assets/sass_tool/_size.scss";
nav{
    @include size(100%,50px);
    white-space: nowrap; 
    background:#f4f5f6;
   
    
    //text-align: justify; /* 3 */
    //box-shadow: inset -3px -1px 2px 0px rgba(0,0,0,.24);
    ul{
        @include size(100%,50px);
        list-style: none;
        overflow-x: scroll;/* 1 */
        
        li{
             margin:0 6px;
             display: inline;
             line-height: 50px;
             
        }
    }
}
</style>